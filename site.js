/* Renders every page from the entries in projects.js. */
(function () {
    'use strict';

    const all = (window.PORTFOLIO && window.PORTFOLIO.projects) || [];
    const professional = all
        .filter(p => p.kind === 'professional')
        .sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')));
    const games = all.filter(p => p.kind === 'game');

    const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    /* ── helpers ── */

    function el(tag, props, children) {
        const node = document.createElement(tag);
        Object.entries(props || {}).forEach(([key, value]) => {
            if (value === undefined || value === null || value === false) return;
            if (key === 'class') node.className = value;
            else if (key === 'text') node.textContent = value;
            else node.setAttribute(key, value === true ? '' : value);
        });
        [].concat(children || []).forEach(child => child && node.append(child));
        return node;
    }

    function formatDate(date) {
        if (!date) return '';
        const [year, month] = String(date).split('-');
        return month ? MONTHS[Number(month) - 1] + ' ' + year : year;
    }

    function metaLine(p) {
        return [p.studio, formatDate(p.date)].filter(Boolean).join(' · ');
    }

    function gameMeta(p) {
        return [p.genre, p.status, p.playable && 'Plays in browser'].filter(Boolean).join(' · ');
    }

    function linkFor(p) {
        return { href: 'project.html?id=' + encodeURIComponent(p.id) };
    }

    function img(src, alt, eager) {
        return el('img', { src: encodeURI(src), alt: alt || '', loading: eager ? null : 'lazy', decoding: 'async' });
    }

    function frame(p, extraClass) {
        if (p.cover) return el('div', { class: 'frame ' + (extraClass || '') }, img(p.cover, p.title));
        return el('div', { class: 'frame frame--blank ' + (extraClass || ''), text: p.title, 'aria-hidden': 'true' });
    }

    /* ── motion: entrances and the slow crossfade ── */

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const observer = 'IntersectionObserver' in window
        ? new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-in');
                observer.unobserve(entry.target);
            });
        }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 })
        : null;

    function reveal(root) {
        (root || document).querySelectorAll('[data-reveal]:not(.is-in)').forEach(node => {
            if (observer) observer.observe(node);
            else node.classList.add('is-in');
        });
    }

    function staggered(nodes) {
        nodes.forEach((node, i) => {
            node.setAttribute('data-reveal', '');
            node.style.setProperty('--i', i);
        });
        return nodes;
    }

    function crossfade(stack) {
        const photos = Array.from(stack.querySelectorAll('img'));
        if (photos.length < 2 || reduced) return;
        let current = 0;
        setInterval(() => {
            if (document.hidden) return;
            photos[current].classList.remove('is-on');
            current = (current + 1) % photos.length;
            photos[current].classList.add('is-on');
        }, 6000);
    }

    /* ── cards: one shape for every project and game ── */

    function chipsFor(p) {
        const labels = p.kind === 'game'
            ? [p.genre, p.status, p.playable && 'Plays in browser']
            : (p.tags || []).slice(0, 4);
        return el('ul', { class: 'chips' }, labels.filter(Boolean).map(text => el('li', { text })));
    }

    function card(p, i, heading) {
        const node = el('a', Object.assign({ class: 'card', 'data-reveal': '' }, linkFor(p)),
            el('div', { class: 'card-core' }, [
                frame(p),
                el('div', { class: 'card-body' }, [
                    el(heading, { text: p.title }),
                    metaLine(p) && el('p', { class: 'card-meta', text: metaLine(p) }),
                    el('p', { class: 'card-line', text: p.summary }),
                    chipsFor(p)
                ])
            ]));
        node.style.setProperty('--i', i % 4);
        return node;
    }

    /* ── home ── */

    function renderWorkCards(root) {
        const featured = professional.filter(p => p.featured);
        featured.forEach((p, i) => root.append(card(p, i, 'h3')));
    }

    function renderGameCards(root) {
        const picks = games.filter(g => g.featured)
            .concat(games.filter(g => !g.featured && g.cover))
            .slice(0, 4);
        picks.forEach((p, i) => root.append(card(p, i, 'h3')));
    }

    /* ── index pages ── */

    function filterBar(root, options, items, matches) {
        const bar = document.querySelector('[data-filters]');
        if (!bar) return;
        const count = document.querySelector('[data-count]');
        const buttons = ['All'].concat(options).map(label =>
            el('button', { type: 'button', 'aria-pressed': label === 'All' ? 'true' : 'false', text: label }));

        function apply(label) {
            let shown = 0;
            items.forEach(({ node, project }) => {
                const visible = label === 'All' || matches(project, label);
                node.hidden = !visible;
                if (visible) shown += 1;
            });
            buttons.forEach(b => b.setAttribute('aria-pressed', String(b.textContent === label)));
            if (count) count.textContent = 'Showing ' + shown + ' of ' + items.length + '.';
        }

        buttons.forEach(b => b.addEventListener('click', () => apply(b.textContent)));
        bar.append(...buttons);
        apply('All');
    }

    function renderWorkIndex(root) {
        const items = professional.map((p, i) => {
            const node = card(p, i, 'h2');
            root.append(node);
            return { node, project: p };
        });
        const tags = [];
        professional.forEach(p => (p.tags || []).forEach(t => tags.includes(t) || tags.push(t)));
        filterBar(root, tags, items, (p, label) => (p.tags || []).includes(label));
    }

    function renderGamesIndex(root) {
        const items = games.map((p, i) => {
            const node = card(p, i, 'h2');
            root.append(node);
            return { node, project: p };
        });
        const statuses = [];
        games.forEach(p => p.status && !statuses.includes(p.status) && statuses.push(p.status));
        if (games.some(p => p.playable)) statuses.push('Plays in browser');
        filterBar(root, statuses, items, (p, label) =>
            label === 'Plays in browser' ? Boolean(p.playable) : p.status === label);
    }

    /* ── project page ── */

    function galleryItem(item, title) {
        if (item.type === 'image') return img(item.src, item.alt || title);
        if (item.type === 'video') {
            return el('video', { src: encodeURI(item.src), controls: true, muted: true, loop: true, playsinline: true, preload: 'metadata' });
        }
        const src = item.type === 'youtube'
            ? 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(item.id) + '?rel=0'
            : 'https://player.vimeo.com/video/' + encodeURIComponent(item.id) + (item.hash ? '?h=' + encodeURIComponent(item.hash) : '');
        return el('div', { class: 'embed' }, el('iframe', {
            src,
            title: title + ' video',
            loading: 'lazy',
            allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen',
            allowfullscreen: true
        }));
    }

    function renderProject(root) {
        const id = new URLSearchParams(location.search).get('id');
        const p = all.find(entry => entry.id === id);
        const isGame = p && p.kind === 'game';
        const back = el('a', {
            class: 'text-link',
            href: isGame ? 'games.html' : 'portfolio.html',
            text: isGame ? 'All games' : 'All work'
        });

        if (!p) {
            root.append(el('div', { class: 'grid project-top' }, [
                el('div', { class: 'project-intro' }, el('h1', { text: 'Project not found' })),
                el('div', { class: 'project-summary' }, [
                    el('p', { class: 'project-about', text: 'That link does not match any project.' }),
                    el('div', { class: 'project-links' }, back)
                ])
            ]));
            return;
        }

        const current = document.querySelector('.nav-links a[href="' + back.getAttribute('href') + '"]');
        if (current) current.setAttribute('aria-current', 'page');

        document.title = p.title + ' · Throndev';
        const gallery = (p.gallery || []).slice();

        // The lit thing at the top: a landscape clip if the project has one, otherwise its cover.
        const clipAt = gallery.findIndex(item => item.type === 'video' && !item.portrait);
        let lead;
        if (clipAt > -1) {
            const clip = gallery.splice(clipAt, 1)[0];
            lead = el('video', {
                src: encodeURI(clip.src), poster: p.cover ? encodeURI(p.cover) : null,
                autoplay: true, muted: true, loop: true, playsinline: true, controls: true
            });
            lead.muted = true;
        } else if (isGame && gallery.length && gallery[0].type === 'image') {
            const shot = gallery.shift();
            lead = img(shot.src, shot.alt, true);
        } else if (p.cover) {
            lead = img(p.cover, p.title, true);
        }

        const links = (p.links || []).map(l =>
            el('a', { class: 'text-link', href: l.url, target: '_blank', rel: 'noopener', text: l.label }));
        if (p.url) {
            links.unshift(el('a', { class: 'button', href: p.url, target: '_blank', rel: 'noopener', text: p.playable ? 'Play in browser' : 'Play on itch.io' }));
        }

        links.push(back);

        // Game covers are small, so they stand beside the text like portrait pictures do.
        const tall = (Boolean(p.portrait) || isGame) && clipAt === -1;
        root.append(el('div', { class: 'grid project-top' + (tall ? ' is-tall' : '') }, [
            el('div', { class: 'project-intro' }, [
                el('h1', { text: p.title, 'data-rise': '' }),
                el('p', { class: 'project-meta', text: isGame ? [metaLine(p), gameMeta(p)].filter(Boolean).join(' · ') : metaLine(p), 'data-rise': '', style: '--i:1' })
            ]),
            lead && el('div', { class: 'project-lead', 'data-rise': '', style: '--i:2' }, lead),
            el('div', { class: 'project-summary' }, [
                el('p', { class: 'project-about', text: p.about || p.summary, 'data-rise': '', style: '--i:3' }),
                p.tags && el('ul', { class: 'chips', 'data-rise': '', style: '--i:4' }, p.tags.map(text => el('li', { text }))),
                el('div', { class: 'project-links', 'data-rise': '', style: '--i:5' }, links)
            ])
        ]));

        const list = [p.skills, p.features].find(items => items && items.length);
        if (p.role || list) {
            root.append(el('div', { class: 'grid section project-body' }, [
                p.role && el('div', { class: 'project-role', 'data-reveal': '' }, [
                    el('h2', { text: 'My role' }),
                    el('p', { text: p.role })
                ]),
                list && el('div', { class: 'project-list', 'data-reveal': '', style: '--i:1' }, [
                    el('h2', { text: p.skills ? 'Skills applied' : 'Features' }),
                    el('ul', {}, list.map(text => el('li', { text })))
                ])
            ]));
        }

        if (gallery.length) {
            root.append(el('div', { class: 'section gallery' }, [
                el('h2', { text: 'Gallery', 'data-reveal': '' }),
                el('div', { class: 'gallery-items' }, gallery.map((item, i) => {
                    const node = galleryItem(item, p.title);
                    node.setAttribute('data-reveal', '');
                    node.style.setProperty('--i', i % 3);
                    return node;
                }))
            ]));
        }

        const siblings = isGame ? games : professional;
        const next = siblings[(siblings.indexOf(p) + 1) % siblings.length];
        if (next && next !== p) {
            root.append(el('a', Object.assign({ class: 'section next', 'data-reveal': '' }, linkFor(next)), [
                el('h2', { text: next.title }),
                el('p', { text: isGame ? 'Next game' : 'Next project' })
            ]));
        }
    }

    /* ── boot ── */

    const renderers = {
        'work-cards': renderWorkCards,
        'game-cards': renderGameCards,
        'work-index': renderWorkIndex,
        'games-index': renderGamesIndex,
        project: renderProject
    };

    document.querySelectorAll('[data-render]').forEach(root => {
        const render = renderers[root.dataset.render];
        if (render) render(root);
    });
    document.querySelectorAll('[data-crossfade]').forEach(crossfade);
    reveal();
})();
