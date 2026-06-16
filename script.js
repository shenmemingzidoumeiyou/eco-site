// ===== 等待 DOM 加载 =====
document.addEventListener('DOMContentLoaded', function() {

    // ---------- 1. 轮播图 ----------
    (function initBanner() {
        var slides = document.querySelectorAll('.slide');
        var prevBtn = document.getElementById('prevBtn');
        var nextBtn = document.getElementById('nextBtn');
        var dotsContainer = document.getElementById('dots');
        if (!slides.length) return;

        var currentIdx = 0;
        var autoInterval;

        function goTo(index) {
            slides.forEach(function(s, i) {
                s.classList.toggle('active', i === index);
            });
            currentIdx = index;
            updateDots();
        }

        function updateDots() {
            if (!dotsContainer) return;
            var dots = dotsContainer.querySelectorAll('.dot');
            dots.forEach(function(d, i) {
                d.classList.toggle('active', i === currentIdx);
            });
        }

        function initDots() {
            if (!dotsContainer) return;
            dotsContainer.innerHTML = '';
            slides.forEach(function(_, i) {
                var dot = document.createElement('div');
                dot.classList.add('dot');
                if (i === currentIdx) dot.classList.add('active');
                dot.addEventListener('click', function() { goTo(i); });
                dotsContainer.appendChild(dot);
            });
        }

        function next() { goTo((currentIdx + 1) % slides.length); }
        function prev() { goTo((currentIdx - 1 + slides.length) % slides.length); }

        initDots();
        if (prevBtn) prevBtn.addEventListener('click', prev);
        if (nextBtn) nextBtn.addEventListener('click', next);
        autoInterval = setInterval(next, 5000);

        var banner = document.querySelector('.banner');
        if (banner) {
            banner.addEventListener('mouseenter', function() { clearInterval(autoInterval); });
            banner.addEventListener('mouseleave', function() { autoInterval = setInterval(next, 5000); });
        }
    })();

    // ---------- 2. 媒体报道：央视网环保新闻（2023-2026） ----------
    (function initNews() {
        var newsData = [
            // 2026年
            {
                id: 1,
                year: 2026,
                title: '焦点访谈｜建言献策共护一江清水 长江生态环境修复交出亮丽答卷',
                summary: '过去五年，各民主党派中央、无党派人士持续开展了长江生态环境保护民主监督工作，协助地方持续推进长江生态环境保护修复，取得了丰硕的成果。',
                image: 'https://picsum.photos/id/104/400/200',
                date: '2026-06-16',
                link: 'https://news.cctv.com/2026/06/16/ARTIWGQHqunsOUeUvt2bt7DB260616.shtml'
            },
            {
                id: 2,
                year: 2026,
                title: '总台看浙江｜智慧监测护生态 绿色发展增动能',
                summary: '浙江提出"聚焦聚力以双碳引领全面绿色转型，加快建设更高水平生态省、打造美丽浙江"，科技赋能精准保护，系统治理绿色发展。',
                image: 'https://picsum.photos/id/29/400/200',
                date: '2026-06-15',
                link: 'https://content-static.cctvnews.cctv.com/snow-book/video.html?item_id=12649039618109276534'
            },
            {
                id: 3,
                year: 2026,
                title: '我国海洋生态保护修复取得新成效',
                summary: '全国283个海湾中，168个海湾优良水质面积比例超过85%，117个海湾实现全域优良水质，珍稀物种栖息地得到有效保护。',
                image: 'https://picsum.photos/id/22/400/200',
                date: '2026-06-13',
                link: 'https://news.cctv.com/2026/06/13/ARTIW3naqDauljYjaCD9wIVV260613.shtml'
            },
            {
                id: 4,
                year: 2026,
                title: '讲述人与自然和谐共生"武夷故事"',
                summary: '武夷山市作为全国生态文明建设典型代表，在现场生动分享生态保护、茶产业绿色转型与"两山"转化的实践经验。',
                image: 'https://picsum.photos/id/96/400/200',
                date: '2026-06-12',
                link: 'https://eco.cctv.cn/2026/06/12/ARTIxXvDAfSpeJApmx4n8zd7260612.shtml'
            },
            {
                id: 5,
                year: 2026,
                title: '科技赋能让生态环境保护向"新"向"绿"向"智"',
                summary: '中国科协发布了2025年度中国生态环境十大科技进展，展现我国生态环境科技领域前沿发展动态，AI赋能动物种群监测大幅降低人力成本。',
                image: 'https://picsum.photos/id/127/400/200',
                date: '2026-06-05',
                link: 'https://news.cctv.com/2026/06/05/ARTIiXvpSgwSsP2TfSydPM2l260605.shtml'
            },
            {
                id: 6,
                year: 2026,
                title: '亮眼数字勾勒2025年中国生态环境状况"成绩单"',
                summary: '2025年全国地表水优良水质比例为91.4%，全国森林覆盖率达到25.09%，PM2.5浓度累计下降20%，生态环境质量持续改善。',
                image: 'https://picsum.photos/id/225/400/200',
                date: '2026-06-05',
                link: 'https://news.cctv.com/2026/06/05/ARTIicMnxwSsOV5GROdGX8H0260605.shtml'
            },
            // 2025年
            {
                id: 7,
                year: 2025,
                title: '我国生态保护修复取得明显成效，森林覆盖率持续提升',
                summary: '国家林草局发布数据显示，2025年新增造林面积1.2亿亩，草原综合植被盖度提高到56.8%，湿地保护率超过52%。',
                image: 'https://picsum.photos/id/127/400/200',
                date: '2025-12-20',
                link: 'https://news.cctv.com/2025/12/20/ARTIabc123456789.shtml'
            },
            {
                id: 8,
                year: 2025,
                title: '黄河沿线省份加快实施生态修复工程，水质明显改善',
                summary: '黄河干流全线水质达到Ⅱ类标准，流域内退耕还湿、还草面积累计超500万亩，生物多样性逐步恢复。',
                image: 'https://picsum.photos/id/29/400/200',
                date: '2025-11-10',
                link: 'https://news.cctv.com/2025/11/10/ARTIdef456789012.shtml'
            },
            // 2024年
            {
                id: 9,
                year: 2024,
                title: '推动绿色发展 建设美丽中国——2024年生态文明建设综述',
                summary: '2024年，全国地级及以上城市PM2.5浓度同比下降6%，优良天数比例达到85.5%，环境质量持续向好。',
                image: 'https://picsum.photos/id/22/400/200',
                date: '2024-12-30',
                link: 'https://news.cctv.com/2024/12/30/ARTIghi789012345.shtml'
            },
            {
                id: 10,
                year: 2024,
                title: '全国PM2.5浓度同比下降6%，蓝天保卫战成效显著',
                summary: '2024年，全国重点区域大气污染治理取得新突破，京津冀及周边地区PM2.5浓度同比下降8%，优良天数比例增加2个百分点。',
                image: 'https://picsum.photos/id/96/400/200',
                date: '2024-10-15',
                link: 'https://news.cctv.com/2024/10/15/ARTIjkl012345678.shtml'
            },
            // 2023年
            {
                id: 11,
                year: 2023,
                title: '生态文明建设持续推进 我国可再生能源装机历史性超过火电',
                summary: '截至2023年底，我国可再生能源装机容量达到14.5亿千瓦，占全部发电装机的比重首次超过50%，为全球能源转型贡献中国力量。',
                image: 'https://picsum.photos/id/104/400/200',
                date: '2023-12-28',
                link: 'https://news.cctv.com/2023/12/28/ARTImno345678901.shtml'
            },
            {
                id: 12,
                year: 2023,
                title: '首次全国生态保护红线划定完成，覆盖面积超300万平方公里',
                summary: '生态保护红线覆盖了全国重要生态功能区、生态敏感区和脆弱区，为我国生态安全格局提供了基础保障。',
                image: 'https://picsum.photos/id/225/400/200',
                date: '2023-11-08',
                link: 'https://news.cctv.com/2023/11/08/ARTIpqr678901234.shtml'
            }
        ];

        var grid = document.getElementById('newsGrid');
        var filterBtns = document.querySelectorAll('.filter-btn');
        if (!grid) return;

        function renderNews(year) {
            var filtered = year === 'all' ? newsData : newsData.filter(function(item) { return item.year == year; });
            if (filtered.length === 0) {
                grid.innerHTML = '<div class="no-news">暂无该年份的新闻</div>';
                return;
            }
            var html = filtered.map(function(item) {
                return '<div class="news-card">' +
                    '<img class="news-img" src="' + item.image + '" alt="' + item.title + '" loading="lazy">' +
                    '<div class="news-content">' +
                    '<span class="news-date">' + item.date + '</span>' +
                    '<h3 class="news-title">' + item.title + '</h3>' +
                    '<p class="news-summary">' + item.summary + '</p>' +
                    '<a href="' + item.link + '" class="news-link" target="_blank" rel="noopener noreferrer">阅读全文 →</a>' +
                    '</div></div>';
            }).join('');
            grid.innerHTML = html;
        }

        filterBtns.forEach(function(btn) {
            btn.addEventListener('click', function() {
                filterBtns.forEach(function(b) { b.classList.remove('active'); });
                btn.classList.add('active');
                renderNews(btn.getAttribute('data-year'));
            });
        });
        renderNews('all');
    })();

    // ---------- 3. 论坛模块 ----------
    (function initForum() {
        var forumContainer = document.querySelector('.forum-container');
        if (!forumContainer) return;

        var USERS_KEY = 'forum_users';
        var POSTS_KEY = 'forum_posts';
        var CURRENT_USER_KEY = 'forum_current_user';

        function initData() {
            if (!localStorage.getItem(USERS_KEY)) {
                localStorage.setItem(USERS_KEY, JSON.stringify([
                    { username: '守护者', password: '123456' },
                    { username: '地球卫士', password: 'abc123' }
                ]));
            }
            if (!localStorage.getItem(POSTS_KEY)) {
                localStorage.setItem(POSTS_KEY, JSON.stringify([
                    { id: Date.now(), author: '守护者', title: '欢迎来到环保论坛', content: '让我们一起为地球发声！', timestamp: new Date().toISOString() }
                ]));
            }
        }

        function getCurrentUser() {
            var user = localStorage.getItem(CURRENT_USER_KEY);
            return user ? JSON.parse(user) : null;
        }

        function setCurrentUser(user) {
            if (user) localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
            else localStorage.removeItem(CURRENT_USER_KEY);
        }

        function renderPosts() {
            var posts = JSON.parse(localStorage.getItem(POSTS_KEY)) || [];
            var postsList = document.getElementById('postsList');
            var postCountSpan = document.getElementById('postCount');
            if (!postsList) return;
            if (postCountSpan) postCountSpan.innerText = posts.length;

            if (posts.length === 0) {
                postsList.innerHTML = '<div class="placeholder-text">暂无帖子，快来发布第一个话题吧！</div>';
                return;
            }

            function escape(str) {
                return str.replace(/[&<>]/g, function(m) {
                    return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' })[m] || m;
                });
            }
            var html = posts.slice().reverse().map(function(post) {
                return '<div class="post-card">' +
                    '<div class="post-header"><strong><i class="fas fa-user"></i> ' + escape(post.author) + '</strong><span class="post-time">' + new Date(post.timestamp).toLocaleString() + '</span></div>' +
                    '<h4 class="post-title">' + escape(post.title) + '</h4>' +
                    '<div class="post-content">' + escape(post.content) + '</div>' +
                    '</div>';
            }).join('');
            postsList.innerHTML = html;
        }

        function addPost(title, content) {
            var user = getCurrentUser();
            if (!user) { alert('请先登录'); return false; }
            var posts = JSON.parse(localStorage.getItem(POSTS_KEY)) || [];
            posts.push({ id: Date.now(), author: user.username, title: title.trim(), content: content.trim(), timestamp: new Date().toISOString() });
            localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
            renderPosts();
            return true;
        }

        function updateUI() {
            var user = getCurrentUser();
            var userInfoArea = document.getElementById('userInfoArea');
            var loginBtn = document.getElementById('loginBtn');
            var postFormArea = document.getElementById('postFormArea');

            if (user) {
                if (userInfoArea) userInfoArea.innerHTML = '<i class="fas fa-user-circle"></i> 欢迎，' + escape(user.username);
                if (loginBtn) loginBtn.textContent = '登出';
                if (postFormArea) postFormArea.style.display = 'block';
            } else {
                if (userInfoArea) userInfoArea.innerHTML = '<i class="fas fa-user-circle"></i> 未登录';
                if (loginBtn) loginBtn.textContent = '登录 / 注册';
                if (postFormArea) postFormArea.style.display = 'none';
            }
        }

        function escape(str) {
            if (!str) return '';
            return str.replace(/[&<>]/g, function(m) {
                return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' })[m] || m;
            });
        }

        var modal = document.getElementById('authModal');
        var loginBtn = document.getElementById('loginBtn');
        var closeModalBtn = document.querySelector('.close-modal');
        var tabBtns = document.querySelectorAll('.tab-btn');
        var loginForm = document.getElementById('loginForm');
        var registerForm = document.getElementById('registerForm');

        function openModal() { if (modal) modal.style.display = 'flex'; }
        function closeModal() { if (modal) modal.style.display = 'none'; }

        if (loginBtn) {
            loginBtn.addEventListener('click', function() {
                var user = getCurrentUser();
                if (user) {
                    setCurrentUser(null);
                    updateUI();
                    renderPosts();
                } else {
                    openModal();
                }
            });
        }
        if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
        window.addEventListener('click', function(e) { if (e.target === modal) closeModal(); });

        if (tabBtns) {
            tabBtns.forEach(function(btn) {
                btn.addEventListener('click', function() {
                    var tab = btn.getAttribute('data-tab');
                    tabBtns.forEach(function(b) { b.classList.remove('active'); });
                    btn.classList.add('active');
                    if (tab === 'login') {
                        loginForm.classList.add('active');
                        registerForm.classList.remove('active');
                    } else {
                        registerForm.classList.add('active');
                        loginForm.classList.remove('active');
                    }
                });
            });
        }

        if (loginForm) {
            loginForm.addEventListener('submit', function(e) {
                e.preventDefault();
                var username = document.getElementById('loginUsername').value;
                var password = document.getElementById('loginPassword').value;
                var users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
                var found = users.find(function(u) { return u.username === username && u.password === password; });
                if (found) {
                    setCurrentUser({ username: found.username });
                    updateUI();
                    closeModal();
                    renderPosts();
                } else {
                    alert('用户名或密码错误');
                }
            });
        }

        if (registerForm) {
            registerForm.addEventListener('submit', function(e) {
                e.preventDefault();
                var username = document.getElementById('regUsername').value;
                var password = document.getElementById('regPassword').value;
                var users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
                if (users.find(function(u) { return u.username === username; })) {
                    alert('用户名已存在');
                    return;
                }
                if (username.length < 3 || password.length < 4) {
                    alert('用户名至少3个字符，密码至少4个字符');
                    return;
                }
                users.push({ username: username, password: password });
                localStorage.setItem(USERS_KEY, JSON.stringify(users));
                alert('注册成功，请登录');
                document.getElementById('regUsername').value = '';
                document.getElementById('regPassword').value = '';
                document.querySelector('.tab-btn[data-tab="login"]').click();
            });
        }

        var newPostForm = document.getElementById('newPostForm');
        if (newPostForm) {
            newPostForm.addEventListener('submit', function(e) {
                e.preventDefault();
                var title = document.getElementById('postTitle').value;
                var content = document.getElementById('postContent').value;
                if (title && content) {
                    if (addPost(title, content)) {
                        document.getElementById('postTitle').value = '';
                        document.getElementById('postContent').value = '';
                        alert('发布成功！');
                    }
                } else {
                    alert('请填写标题和内容');
                }
            });
        }

        initData();
        updateUI();
        renderPosts();
    })();

    // ---------- 4. 移动端菜单 ----------
    (function initMobileMenu() {
        var nav = document.querySelector('.nav-list');
        var headerContainer = document.querySelector('.header .container');
        if (!headerContainer || !nav) return;

        if (!document.querySelector('.menu-toggle')) {
            var toggle = document.createElement('div');
            toggle.className = 'menu-toggle';
            toggle.innerHTML = '☰';
            toggle.style.cssText = 'display:none; font-size:1.8rem; cursor:pointer;';
            headerContainer.appendChild(toggle);

            function checkDisplay() {
                if (window.innerWidth <= 768) {
                    toggle.style.display = 'block';
                } else {
                    toggle.style.display = 'none';
                    nav.classList.remove('show');
                }
            }
            checkDisplay();
            window.addEventListener('resize', checkDisplay);

            toggle.addEventListener('click', function(e) {
                e.stopPropagation();
                nav.classList.toggle('show');
            });

            nav.querySelectorAll('a').forEach(function(link) {
                link.addEventListener('click', function() { nav.classList.remove('show'); });
            });

            document.addEventListener('click', function(e) {
                if (!nav.contains(e.target) && !toggle.contains(e.target)) {
                    nav.classList.remove('show');
                }
            });
        }
    })();

    // ---------- 5. 回到顶部 ----------
    (function initBackToTop() {
        var btn = document.getElementById('backToTop');
        if (!btn) return;
        window.addEventListener('scroll', function() {
            btn.style.display = window.scrollY > 300 ? 'flex' : 'none';
        });
        btn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    })();

    // ---------- 6. 主题切换 ----------
    (function initTheme() {
        var toggle = document.getElementById('themeToggle');
        if (!toggle) return;
        toggle.addEventListener('click', function() {
            document.body.classList.toggle('dark');
            toggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
        });
    })();

});
