const templates = [
    "01-add-life-health-fitness-free-bootstrap-html5-template",
    "02-reveal",
    "03-agile-agency-free-bootstrap-web-template",
    "04-amaze-photography-bootstrap-html5-template",
    "05-aroma-beauty-and-spa-responsive-bootstrap-template",
    "06-avenger-multi-purpose-responsive-html5-bootstrap-template",
    "07-b-school-free-education-html5-website-template",
    "08-beauty-salon-bootstrap-html5-template",
    "09-brand-html5-app-landing-page-responsive-web-template",
    "10-businessline-corporate-portfolio-bootstrap-responsive-web-template",
    "11-businessr-corporate-bootstrap-responsive-web-template",
    "12-car-repair-html5-bootstrap-template",
    "13-car-zone-automobile-bootstrap-responsive-web-template",
    "14-city-square-bootstrap-responsive-web-template",
    "15-cloud-hosting-free-bootstrap-responsive-website-template",
    "16-clouds-html5-multipurpose-landing-page-template",
    "17-coffee-shop-free-html5-template",
    "18-creative-free-responsive-html5-business-template",
    "19-darktouch-corporate-portfolio-bootstrap-responsive-web-template"
];
class SliderDetailGrid {
    constructor() {
        this.templates = templates;
        this.tempPath = "./qinghua-template/spa/";
        this.tempLink = "/temp.html";
        this.mainPage = document.querySelector(".mainPage");
        this.pageSlider = document.getElementById("pageSlider");
        this.detailGrids = null;
        this.detailPage = null;

        this.state = { viewer: "mainView", detailPage: {}, detailGrid: {} };

        this.init();
    }

    init() {
        this.createGridPage();
        this.createDetailPage();
        this.createDetailGrids();
        this.navEvents();
        this.bindEvents();
    }

    bindEvents() {
        window.addEventListener('resize', () => {
            this.detailGrids.innerHTML = "";
            this.createDetailGrids();
        });
    };

    navEvents() {
        window.addEventListener("popstate", this.handlePopState.bind(this));
        window.addEventListener("hashchange", () => this.onHashChange());
        this.onHashChange();
    }

    setState(update) {
        this.state = { ...this.state, ...update };
    }

    setDataset(el, data) {
        for (const [key, value] of Object.entries(data)) {
            el.dataset[key] = value;
        }
    }

    createGridPage() {
        const headerText = document.createElement("div");
        headerText.classList.add("headerText");
        headerText.innerHTML = "模版使用的行业";

        const homeHeader = document.createElement("div");
        homeHeader.classList.add("homeHeader");
        homeHeader.appendChild(headerText);

        const gridPage = document.createElement("div");
        gridPage.id = "gridPage";
        gridPage.classList.add("gridPage");
        gridPage.appendChild(homeHeader);

        const detailGrids = document.createElement("div");
        detailGrids.id = "detailGrids";
        detailGrids.classList.add("detailGrids");
        this.detailGrids = detailGrids;
        gridPage.appendChild(detailGrids);

        this.pageSlider.appendChild(gridPage);
    }

    createDetailPage() {
        const detailPage = document.createElement("div");
        detailPage.id = "detailPage";
        detailPage.classList.add("detailPage");
        this.detailPage = detailPage;
        detailPage.addEventListener("click", () => this.navigateTo("mainView"));
        this.pageSlider.appendChild(detailPage);
    }

    circleLoaderIframe(appenddiv, src) {
        if (!(appenddiv instanceof HTMLElement)) throw new Error('appenddiv 必须是有效的 DOM 元素');

        appenddiv.querySelector('#cicleloader-container')?.remove();

        const container = document.createElement('div');
        container.id = 'cicleloader-container';

        const rippleLoader = document.createElement('div');
        rippleLoader.className = 'ripple-loader';

        const bubbleLoader = document.createElement('div');
        bubbleLoader.className = 'bubble-loader';

        const loadingText = document.createElement('div');
        loadingText.className = 'loading-text';
        loadingText.textContent = '加载中';

        const backText = document.createElement('h3');
        backText.className = 'btnText';
        backText.innerHTML = '&lt;';

        const iframe = document.createElement('iframe');
        iframe.src = src;

        bubbleLoader.appendChild(loadingText);
        container.append(rippleLoader, bubbleLoader, iframe);
        appenddiv.appendChild(container);

        bubbleLoader.addEventListener('click', () => {
            this.goToMain();
        });

        iframe.addEventListener('load', () => {
            rippleLoader.classList.add('active');
            iframe.classList.add('loaded');
            rippleLoader.addEventListener('animationend', () => {
                container.classList.add('loaded');
                rippleLoader.remove();
                loadingText.remove();
                bubbleLoader.classList.add('loaded');
                bubbleLoader.appendChild(backText);
            }, { once: true });
        });

        setTimeout(() => {
            if (!container.classList.contains('loaded')) {
                container.classList.add('loaded');
                rippleLoader.classList.add('active');
                iframe.classList.add('loaded');
                rippleLoader.addEventListener('animationend', () => {
                    rippleLoader.remove();
                    loadingText.remove();
                    bubbleLoader.classList.add('loaded');
                    bubbleLoader.appendChild(backText);
                }, { once: true });
            }
        }, 3000);

        iframe.addEventListener('error', () => {
            container.style.background = 'radial-gradient(circle, #ff4d4d, #b32424)';
            container.innerHTML = `<div class="error-text">加载失败: ${src}</div>`;
        });
    }

    injectImageIntoGrid(grid, linkurl, imgurl, info) {
        const link = Object.assign(document.createElement("a"), {
            href: linkurl,
            target: "_blank"
        });
        link.addEventListener("click", (e) => e.preventDefault());
        link.appendChild(
            Object.assign(document.createElement("img"), {
                src: imgurl,
                loading: "lazy"
            })
        );

        const gridInfo = document.createElement("div");
        gridInfo.className = "gridInfo";
        info
            .split("/")
            .slice(-2, -1)[0]
            .split("-")
            .forEach((keyword) => {
                gridInfo.appendChild(
                    Object.assign(document.createElement("div"), {
                        className: "infoKeywords",
                        innerHTML: `<h3>${keyword}</h3>`
                    })
                );
            });

        grid.append(link, gridInfo);
    }

    createDetailGrids() {
        this.detailGrids.innerHTML = '';

        const totalGrids = this.templates.length + 1;
        const gridsWidth = this.detailGrids.clientWidth;
        const gridGap = parseFloat(getComputedStyle(this.detailGrids).gap) || 16;
        const perRow = Math.min(Math.max(Math.floor(gridsWidth / 300), 2), 5);
        const gridWidth = (gridsWidth - (perRow - 1) * gridGap) / perRow;
        const ratio = 1.3;

        let count = 1;
        for (let i = 0; i < Math.ceil(totalGrids / perRow); i++) {
            const gridRow = document.createElement("div");
            gridRow.classList.add("gridsrow");

            for (let j = 0; j < perRow && count <= totalGrids; j++, count++) {
                const detailGrid = document.createElement("div");
                detailGrid.classList.add("detailGrid", `grid-${i + 1}-${j + 1}`);
                detailGrid.style.width = gridWidth + "px";
                detailGrid.style.height = gridWidth * ratio + "px";

                if (count === totalGrids) {
                    detailGrid.classList.add("enddetailGrid");
                    detailGrid.innerHTML = `<a href="/temp.html" target="/">更多模板 ➤</a>`;
                    detailGrid.style.cursor = "pointer";
                } else {
                    const index = count - 1;
                    const linkurl = `${this.tempPath}${this.templates[index]}/index.html`;
                    const imgurl = `${this.tempPath}${this.templates[index]}/screenshot.png`;

                    this.injectImageIntoGrid(detailGrid, linkurl, imgurl, linkurl);

                    detailGrid.addEventListener("click", (e) => {
                        const clickX = e.clientX;
                        const enterFrom = clickX < window.innerWidth / 2 ? "left" : "right";
                        sessionStorage.setItem("lastEnterFrom", enterFrom);  // ✅ 保存

                        this.setState({
                            viewer: "detailView",
                            detailGrid: {
                                index,
                                perRow,
                                totalGrids,
                                imgurl,
                                linkurl,
                                enterFrom  // ✅ 存下来
                            }
                        });
                        this.navigateTo("detailView");
                    });

                }

                gridRow.appendChild(detailGrid);
            }
            this.detailGrids.appendChild(gridRow);
        }
    }

    navigateTo(view) {
        if (view === "detailView") {
            const { index, enterFrom, ...rest } = this.state.detailGrid;
            const hash = `#detailView/template/${index + 1}`;
            history.pushState({ view, ...rest, index, enterFrom }, "", hash);  // ✅ 带入方向
            this.goToDetail();
        } else {
            history.pushState({ view: "mainView" }, "", "/");
            this.goToMain();
        }
    }

    goToDetail() {
        const { index, perRow, imgurl, linkurl, enterFrom } = this.state.detailGrid;

        this.circleLoaderIframe(this.detailPage, linkurl);
        document.body.style.overflow = "hidden";

        this.detailPage.style.transform = `translateY(${window.scrollY}px)`;

        if (enterFrom === "left") {
            this.detailPage.style.left = "-100%";
            this.mainPage.style.transform = "translateX(100%)";
        } else {
            this.detailPage.style.left = "100%";
            this.mainPage.style.transform = "translateX(-100%)";
        }
    }



    goToMain() {
        this.setState({ viewer: "mainView" });
        document.body.style.overflow = "";

        this.mainPage.style.transform = "translateX(0)";
        this.detailPage.style.transform = "translateY(0)";
    }

    handlePopState(event) {
        const state = event.state;
        if (!state || state.view === "mainView") {
            this.goToMain();
        } else if (state.view === "detailView") {
            // 如果刷新了，可能 state 是 null
            const enterFrom = state.enterFrom || sessionStorage.getItem("lastEnterFrom") || "right";
            this.setState({
                viewer: "detailView",
                detailGrid: { ...state, enterFrom }
            });
            this.goToDetail();
        }
    }


    onHashChange() {
        const hash = location.hash.slice(1);
        const parts = hash.split("/");
        if (parts[0] !== "detailView") {
            this.goToMain();
            return;
        }

        const indexStr = parts[2];
        const index = parseInt(indexStr, 10) - 1;
        if (isNaN(index) || index < 0 || index >= this.templates.length) {
            this.goToMain();
            return;
        }

        const templateName = this.templates[index];
        const linkurl = `${this.tempPath}${templateName}/index.html`;
        const imgurl = `${this.tempPath}${templateName}/screenshot.png`;
        const perRow = Math.min(Math.max(Math.floor(this.detailGrids.clientWidth / 300), 2), 5);
        const totalGrids = this.templates.length + 1;

        const enterFrom = sessionStorage.getItem("lastEnterFrom") || "right";
        this.setState({
            viewer: "detailView",
            detailGrid: { index, perRow, totalGrids, imgurl, linkurl, enterFrom }
        });


        this.goToDetail();
    }
}

window.onload = function() {
  console.log("所有资源（包括图片、样式、脚本等）加载完成后执行");
  
  const gallery = new SliderDetailGrid();
};