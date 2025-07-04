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
        this.tempLink = "https://example.com/all-templates";
        this.mainPage = document.querySelector(".mainPage");
        this.pageSlider = document.getElementById("pageSlider");
        this.detailGrids = null;
        this.detailPage = null;

        this.state = {
            viewer: "mainView",
            detailPage: {},
            detailGrid: {}
        };

        this.init();
    }

    init() {
        this.createGridPage();
        this.createDetailPage();
        this.createDetailGrids();
        this.navEvents();
    }


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

        // 创建容器元素
        const container = document.createElement('div');
        container.id = 'cicleloader-container';

        // 创建波纹加载元素
        const rippleLoader = document.createElement('div');
        rippleLoader.className = 'ripple-loader';

        // 创建气泡加载元素
        const bubbleLoader = document.createElement('div');
        bubbleLoader.className = 'bubble-loader';

        // 创建加载文本元素
        const loadingText = document.createElement('div');
        loadingText.className = 'loading-text';
        loadingText.textContent = '加载中';

        // 创建返回按钮文本
        const backText = document.createElement('h3');
        backText.className = 'btnText';
        backText.innerHTML = '&lt;'; // 使用HTML实体表示<符号

        // 创建iframe元素
        const iframe = document.createElement('iframe');
        iframe.src = src; // src是外部传入的变量

        bubbleLoader.appendChild(loadingText);
        container.append(rippleLoader, bubbleLoader, iframe);
        appenddiv.appendChild(container);

        bubbleLoader.addEventListener('click', () => {
            this.goToMain()
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
        const totalGrids = this.templates.length + 1;
        const gridsWidth = this.detailGrids.clientWidth;
        const gridWidth = 300;
        const ratio = 1.3;
        const perRow = Math.min(Math.max(Math.floor(gridsWidth / gridWidth), 2), 5);

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
                    detailGrid.innerHTML = `<a href="${this.tempLink}" target="_blank">查看更多模板 ➤</a>`;
                    detailGrid.style.cursor = "pointer";
                } else {
                    const index = count - 1;
                    const linkurl = `${this.tempPath}${this.templates[index]}/index.html`;
                    const imgurl = `${this.tempPath}${this.templates[index]}/screenshot.png`;

                    this.injectImageIntoGrid(detailGrid, linkurl, imgurl, linkurl);
                    this.setDataset(detailGrid, { index, perRow, totalGrids, imgurl, linkurl });

                    detailGrid.addEventListener("click", (e) => {
                        this.navigateTo("detailView", { index, perRow, totalGrids, imgurl, linkurl });
                    });
                }

                gridRow.appendChild(detailGrid);
            }
            this.detailGrids.appendChild(gridRow);
        }
    }


    navigateTo(view, data = {}) {
        if (view === "detailView") {
            const hash = `#detailView/template/${data.index + 1}`;
            history.pushState({ view, ...data }, "", hash);

            this.goToDetail(data);
        } else {
            history.pushState({ view: "mainView" }, "", "/");
            this.goToMain();
        }
    }

    goToDetail({ index, perRow, totalGrids, imgurl, linkurl }) {
        this.circleLoaderIframe(this.detailPage, linkurl)
        this.setState({ viewer: "detailView", detailGrid: { index, perRow, totalGrids, imgurl, linkurl } });
        document.body.style.overflow = "hidden";

        const rowIndex = index % perRow;
        const isMiddle = perRow % 2 === 1 && rowIndex === Math.floor(perRow / 2);
        const isLeftHalf = rowIndex < Math.floor(perRow / 2);
        const moveDirection = isMiddle || perRow === 1
            ? window.innerWidth / 2 > window.innerWidth / 2 ? "right" : "left"
            : isLeftHalf ? "left" : "right";

        this.detailPage.style.transform = `translateY(${window.scrollY}px)`;

        if (moveDirection === "left") {
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

    loadFromUrl() {
        const params = new URLSearchParams(location.search);
        const view = params.get("view");

        if (view === "detail") {
            this.goToDetail({
                index: Number(params.get("index")),
                perRow: Number(params.get("perRow")),
                totalGrids: Number(params.get("totalGrids")),
                imgurl: params.get("imgurl"),
                linkurl: params.get("linkurl")
            });
        } else {
            this.goToMain();
        }
    }

    handlePopState(event) {
        const state = event.state;
        if (!state || state.view === "mainView") {
            this.goToMain();
        } else if (state.view === "detailView") {
            this.goToDetail(state);
        }
    }


    onHashChange() {
        const hash = location.hash.slice(1); // 移除开头的 #
        const parts = hash.split("/");
        if (parts[0] !== "detailView") {
            this.goToMain();
            return;
        }

        const indexStr = parts[2]; // template/3 => 3
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

        this.goToDetail({ index, perRow, totalGrids, imgurl, linkurl });
    }


}

const gallery = new SliderDetailGrid();