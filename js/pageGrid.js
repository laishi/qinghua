class SliderDetailGrid {
    constructor() {
        this.templateFolders = [
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
            "19-darktouch-corporate-portfolio-bootstrap-responsive-web-template",
            "20-delite-music-html5-bootstrap-responsive-web-template",
            "21-eat-restaurant-bootstrap-html5-template",
            "22-elegant-free-multi-purpose-bootstrap-responsive-template",
            "23-enlive-corporate-free-html5-bootstrap-web-template",
            "24-fit-healthy-fitness-and-gym-html5-bootstrap-theme",
            "25-fitness-zone-html5-bootstrap-responsive-web-template",
            "26-frames-corporate-bootstrap-free-html5-template",
            "27-free-bootstrap-template-real-estate-my-home",
            "28-free-bootstrap-template-restaurant-website-treehut",
            "29-free-bootstrap-template-rockline-business",
            "30-free-portfolio-html5-responsive-website-sam",
            "31-getdoctor-free-bootstrap-responsive-website-template",
            "32-golden-hotel-free-html5-bootstrap-web-template",
            "33-grand-free-bootstrap-responsive-website-template",
            "34-green-corp-flat-free-responsive-mobile-website",
            "35-iam-html5-responsive-portfolio-resume-template",
            "36-iclick-photography-bootstrap-free-website-template",
            "37-idata-hosting-free-bootstrap-responsive-website-template",
            "38-ideal-interior-design-free-bootstrap-website-template",
            "39-john-bootstrap-one-page-html5-free-resume-template",
            "40-johndoe-portfolio-resume-bootstrap-template",
            "41-line-free-app-landing-page-responsive-web-template",
            "42-lovely-wedding-bootstrap-free-website-template",
            "43-me-resume-personal-portfolio-responsive-template",
            "44-mobile-app-free-one-page-responsive-html5-landing-page",
            "45-relax-interior-free-bootstrap-responsive-website-template",
            "46-rocket-business-bootstrap-free-responsive-web-theme",
            "47-skytouch-onepage-bootstrap-responsive-web-template",
            "48-smart-interior-designs-html5-bootstrap-web-template",
            "49-speed-hosting-bootstrap-free-html5-template"
        ];
        this.numgrids = 19;
        this.tempLink = "temp.html";
        this.tempPath = "./qinghua-template/spa/";
        this.templateFolders = this.templateFolders.slice(0, this.numgrids);
        this.detailGridsContainer = document.getElementById("detailGrids");
        this.pages = document.querySelector(".pages-content");
        this.detailPage = document.getElementById("detailPage");
        this.scrollPosition = 0;
        this.count = 1;
        this.currentActiveGrid = null;
        this.currentActiveRow = null;
        this.gridAspectRatio = 1.3;

        this.init();
    }

    init() {
        this.generateGrids();
        this.bindEvents();
    }

    calculatePerRow() {
        const gridWidth = 300;
        const containerWidth = this.detailGridsContainer.clientWidth;
        let perRow = Math.floor(containerWidth / gridWidth);
        return Math.min(Math.max(perRow, 2), 5);
    }

    injectImageIntoGrid(grid, linkurl, imgurl, info) {
        const img = document.createElement("img");
        img.src = imgurl;
        img.loading = "lazy";

        const link = document.createElement("a");
        link.href = linkurl;
        link.target = "_blank";
        link.appendChild(img);

        link.addEventListener("click", (e) => {
            e.preventDefault();
        });


        const gridInfo = document.createElement("div");
        gridInfo.className = "gridInfo";

        const infoParts = info.split('/');
        const keywordsPart = infoParts[infoParts.length - 2];
        console.log(keywordsPart);
        
        const infoList = keywordsPart.split('-');
        for (let i = 0; i < infoList.length; i++) {
            const infoKeywords = document.createElement("div");
            infoKeywords.className = "infoKeywords";
            infoKeywords.innerHTML = `<h3>${infoList[i]}</h3>`;
            gridInfo.appendChild(infoKeywords);
        }

        console.log(infoList.length);
        

        grid.innerHTML = '';
        grid.appendChild(link);
        grid.appendChild(gridInfo);
    }

 
    createDetailIframe(url) {
        const container = document.createElement("div");
        container.className = "detailtemplate";
        container.style.width = "100%";
        container.style.height = "100vh";
        container.style.position = "relative";
        container.style.overflow = "hidden";

        const iframe = document.createElement("iframe");
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.border = "none";
        iframe.style.display = "none";

        iframe.onload = () => {
            iframe.style.display = "block";
        };

        container.appendChild(iframe);
        this.detailPage.appendChild(container);
        iframe.src = url;
    }

    generateGrids() {
        this.detailGridsContainer.innerHTML = '';
        this.count = 1;

        const total = this.templateFolders.length;
        const totalGrids = total + 1;
        const perRow = this.calculatePerRow();
        const gridGap = parseFloat(getComputedStyle(this.detailGridsContainer).gap) || 16;
        const containerWidth = this.detailGridsContainer.clientWidth;
        const gridWidth = (containerWidth - (perRow - 1) * gridGap) / perRow;
        const gridHeight = gridWidth * this.gridAspectRatio;

        for (let i = 0; i < Math.ceil(totalGrids / perRow); i++) {
            const row = document.createElement("div");
            row.className = "gridsrow";

            for (let j = 0; j < perRow && this.count <= totalGrids; j++) {
                const grid = document.createElement("div");
                grid.className = "detailGrid";

                if (this.count === totalGrids) {
                    grid.classList.add("enddetailGrid");
                    grid.innerHTML = `<a href="${this.tempLink}" target="_blank">查看更多模板 ➤</a>`;
                    grid.style.cursor = "pointer";
                } else {
                    const imgurl = this.tempPath + this.templateFolders[this.count - 1] + "/screenshot.png";
                    const linkurl = this.tempPath + this.templateFolders[this.count - 1] + "/index.html";
                    this.injectImageIntoGrid(grid, linkurl, imgurl, linkurl);
                }

                this.bindGridEvents(grid, this.count - 1);
                row.appendChild(grid);
                this.count += 1;
            }

            this.detailGridsContainer.appendChild(row);
        }
    }

    bindGridEvents(grid, index) {
        // if (grid.classList.contains("enddetailGrid")) return;

        grid.addEventListener("click", (e) => {
            const xpos = e.clientX;
            let linkurl = this.tempPath + this.templateFolders[index] + "/index.html";
            this.detailPage.querySelector('h3').innerText = linkurl;
            this.createDetailIframe(linkurl);

            let rownum = this.calculatePerRow();
            this.sliding(xpos, index, rownum);
            document.body.style.overflow = "hidden";
        });

        grid.addEventListener("mouseover", () => {
            if (grid === this.currentActiveGrid) return;

            this.currentActiveGrid?.classList.remove("activeGrid");
            this.currentActiveRow?.classList.remove("activeRow");

            grid.classList.add("activeGrid");
            const row = grid.closest(".gridsrow");
            row?.classList.add("activeRow");

            this.currentActiveGrid = grid;
            this.currentActiveRow = row;
        });
    }

    bindEvents() {
        this.detailPage.addEventListener("click", () => {
            this.pages.style.transform = "translateX(0%)";
            const detailTemplate = this.detailPage.querySelector(".detailtemplate");
            if (detailTemplate) {
                setTimeout(() => {
                    detailTemplate.remove();
                }, 1000);
            }
            this.detailPage.style.transform = `translate(0px, 0px)`;
            document.body.style.overflow = "";
            history.back();
        });

        window.addEventListener("resize", () => {
            this.generateGrids();
        });

        window.addEventListener("popstate", (event) => {
            if (location.hash !== "#detailpage") {
                this.pages.style.transform = "translateX(0%)";
                const detailTemplate = this.detailPage.querySelector(".detailtemplate");
                if (detailTemplate) {
                    detailTemplate.remove();
                }
            }
            this.detailPage.style.transform = `translate(0px, 0px)`;
            document.body.style.overflow = "";
        });
    }

    sliding(pos, index, rownum) {
        const totalGrids = this.templateFolders.length助手

        const fullRowCount = Math.floor(totalGrids / rownum);
        const fullRowItems = fullRowCount * rownum;
        const lastRowCount = totalGrids - fullRowItems;

        let realRownum = rownum;
        let rowindex = index % rownum;

        if (index >= fullRowItems && lastRowCount > 0) {
            realRownum = lastRowCount;
            rowindex = index - fullRowItems;
        }

        let moveDirection = "";

        if (realRownum === 1) {
            moveDirection = pos > window.innerWidth / 2 ? "left" : "right";
        } else if (realRownum % 2 === 1) {
            const middle = Math.floor(realRownum / 2);
            if (rowindex < middle) {
                moveDirection = "right";
            } else if (rowindex === middle) {
                moveDirection = pos > window.innerWidth / 2 ? "left" : "right";
            } else {
                moveDirection = "left";
            }
        } else {
            const middle = realRownum / 2;
            if (rowindex < middle) {
                moveDirection = "right";
            } else {
                moveDirection = "left";
            }
        }

        if (moveDirection === "left") {
            this.detailPage.style.transform = `translate(100%, ${this.scrollPosition}px)`;
            this.pages.style.transform = "translateX(-100%)";
        } else {
            this.detailPage.style.transform = `translate(-100%, ${this.scrollPosition}px)`;
            this.pages.style.transform = "translateX(100%)";
        }

        history.pushState(null, "", "#detailpage");
        this.detailPageScroll();
    }

    detailPageScroll(x = undefined, y = undefined) {
        const currentTransform = this.detailPage.style.transform;
        const transformX = currentTransform.split(",")[0]?.split("(")[1]?.trim() || "0px";
        const finalX = (x !== undefined) ? `${x}px` : transformX;
        const finalY = (y !== undefined) ? `${y}px` : `${window.scrollY}px`;

        this.detailPage.style.transform = `translate(${finalX}, ${finalY})`;
    }
}

const gallery = new SliderDetailGrid();