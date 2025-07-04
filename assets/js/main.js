const bodyHidden = () => {
    document.querySelector('body').style.overflow = 'hidden';
}

const bodyVisible = () => {
    document.querySelector('body').style.overflow = 'visible';
}

const phoneInp = document.querySelectorAll('input[type="tel"]');

if (phoneInp.length) {
    phoneInp.forEach(el => {
        IMask(el, {
            mask: '+{7}(000) 000-00-00',
        })
    });
}

const searchForm = document.querySelector('.header .search-form');
const searchFormInp = document.querySelector('.header .search-form__inp input');
const searchFormClose = document.querySelector('.header .search-form__close');
const searchFormOpen = document.querySelector('.header .search-form__open');
const searchResult = document.querySelector('.search-result');
const searchResultBtn = document.querySelectorAll('.search-result__link');
const searchResultItem = document.querySelectorAll('.search-result__right-item');

if (searchForm) {
    searchFormOpen.onclick = () => {
        searchForm.classList.add('active');
    }

    searchFormClose.onclick = () => {
        searchForm.classList.remove('active');
        searchResult.classList.remove('active');
        bodyVisible();
        searchFormInp.value = ''
    }

    searchFormInp.oninput = e => {
        if (e.target.value.length > 0) {
            searchResult.classList.add('active');
            bodyHidden();
        } else {
            searchResult.classList.remove('active');
            bodyVisible();
        }
    }
}

if (searchResultBtn.length) {
    searchResultBtn.forEach((btn, btnID) => {
        btn.onclick = () => {
            searchResultItem.forEach((el, elID) => {
                if (elID == btnID) {
                    el.classList.add('active');
                } else {
                    el.classList.remove('active');
                }
            })
            searchResultBtn.forEach((el, elID) => {
                if (elID == btnID) {
                    el.classList.add('active');
                } else {
                    el.classList.remove('active');
                }
            })
        }
    })
}

const homeSwp = new Swiper('.home-swiper', {
    slidesPerView: 1,
    effect: 'fade',
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.home .swp-pagination',
        clickable: true,
    }
})

if (document.querySelector('.home-swiper')) {
    const homeCardText = document.querySelectorAll('.home .card-left__bottom');
    const homeSwpText = document.querySelector('.home .swp-pagination__wrap p');

    homeSwpText.textContent = homeCardText[homeSwp.realIndex].textContent;
    
    homeSwp.on('slideChange', function (e) {
        homeSwpText.textContent = homeCardText[homeSwp.realIndex].textContent;
    });
}

const newProductSwp = new Swiper('.new-product__swp', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    loop: true,
    breakpoints: {
        991: {
            slidesPerView: 4,
            spaceBetween: 20,
        }
    },
    navigation: {
        nextEl: '.new-product .swp-next',
        prevEl: '.new-product .swp-prev',
    }
})

if (document.querySelector('.new-product__swp')) {
    const newProductSwpPagination = document.querySelector('.new-product .swp-fraction');
    newProductSwpPagination.innerHTML = `<span>${newProductSwp.realIndex + 1} /</span> ${newProductSwp.slides.length}`;
    newProductSwp.on('slideChange', function (e) {
        newProductSwpPagination.innerHTML = `<span>${newProductSwp.realIndex + 1} /</span> ${newProductSwp.slides.length}`;
    });
}

const likeBtns = document.querySelectorAll('.like-btn');

if (likeBtns.length) {
    likeBtns.forEach(el => {
        el.onclick = () => {
            el.classList.toggle('active');
        }
    })
}

const popularSwp = new Swiper('.popular-product .swiper', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    loop: true,
    breakpoints: {
        991: {
            slidesPerView: 4,
            spaceBetween: 20,
        }
    },
    loop: true,
    navigation: {
        nextEl: '.popular-product .swp-next',
        prevEl: '.popular-product .swp-prev',
    }
})

if (document.querySelector('.popular-product .swiper')) {
    const popularSwpPagination = document.querySelector('.popular-product .swp-fraction');
    popularSwpPagination.innerHTML = `<span>${popularSwp.realIndex + 1} /</span> ${popularSwp.slides.length}`;
    popularSwp.on('slideChange', function (e) {
        popularSwpPagination.innerHTML = `<span>${popularSwp.realIndex + 1} /</span> ${popularSwp.slides.length}`;
    });
}

const brandSwp = new Swiper('.brand-swp .swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: '.brand .swp-next',
        prevEl: '.brand .swp-prev',
    }
})

if (document.querySelector('.brand-swp .swiper')) {
    const brandSwpPagination = document.querySelector('.brand .swp-fraction');
    brandSwpPagination.innerHTML = `<span>${brandSwp.realIndex + 1} /</span> ${brandSwp.slides.length}`;
    brandSwp.on('slideChange', function (e) {
        brandSwpPagination.innerHTML = `<span>${brandSwp.realIndex + 1} /</span> ${brandSwp.slides.length}`;
    });
}

const menu = document.querySelector('.menu');
const headerBars = document.querySelector('.header-bars');
const menuClose = document.querySelector('.menu-close');
const menuBg = document.querySelector('.menu-bg');
const menuNavsItem = document.querySelectorAll('.menu-navs__item');

if (menu) {
    headerBars.onclick = () => {
        menu.classList.add('active');
        bodyHidden();
    }

    const menuCloseF = () => {
        menu.classList.remove('active');
        menu.classList.add('end-active');
        setTimeout(() => {
            menu.classList.remove('end-active');
            bodyVisible();
        }, 400);
    }

    menuClose.onclick = () => menuCloseF();
    menuBg.onclick = () => menuCloseF();
}

if (menuNavsItem.length) {
    menuNavsItem.forEach(el => {
        const btn = el.querySelector('.menu-navs__btn');

        btn.onclick = () => {
            el.classList.toggle('active');

            menuNavsItem.forEach(a => {
                if (a != el) a.classList.remove('active');
            })
        }
    })
}

const catalogSort = document.querySelectorAll('.catalog-sort');

if (catalogSort.length) {
    catalogSort.forEach(el => {
        const btn = el.querySelector('.catalog-sort__btn');
        const list = el.querySelectorAll('.catalog-sort__list li');

        btn.onclick = () => {
            el.classList.toggle('active');
        }

        list.forEach(listItem => {
            listItem.onclick = () => {
                el.classList.remove('active');
                btn.classList.add('selected');
                btn.querySelector('span').textContent = listItem.textContent;
                btn.querySelector('input').value = listItem.textContent;
                list.forEach(a => {
                    if (a == listItem) {
                        a.classList.add('selected');
                    } else {
                        a.classList.remove('selected')
                    }
                })
            }
        })
    })
}

const filterAcc = document.querySelectorAll('.filter-modal__accordion');
if (filterAcc.length) {
    filterAcc.forEach(el => {
        const btn = el.querySelector('.filter-modal__accordion-btn');
        
        btn.onclick = () => {
            el.classList.toggle('active');
        }
    })
}

const priceRange = document.querySelectorAll('.form-price');

if (priceRange.length) {
    priceRange.forEach(doc => {
        const rangeS = doc.querySelectorAll('input[type=range]');
        const numberS = doc.querySelectorAll('.form-price__value p');
        const line = doc.querySelector('.line');

        const handleInput = () => {
            var slide1 = parseFloat(rangeS[0].value),
                slide2 = parseFloat(rangeS[1].value);
    
            if (slide1 > slide2) {
                [slide1, slide2] = [slide2, slide1];
            }
        
            numberS[0].textContent = `от ${slide1}, ₽`;
            numberS[1].textContent = `до ${slide2}, ₽`;
            line.style.left = slide1 * 100 / (rangeS[0].max - rangeS[0].min) + '%'
            line.style.width = (slide2 - slide1) * 100 / (rangeS[0].max - rangeS[0].min) + '%'
        }

        rangeS.forEach(el => {
            el.oninput = () => handleInput();
        })
        handleInput();
    })
}

const filterModal = document.querySelector('.filter-modal');
const filterModalOpen = document.querySelectorAll('.filter-modal__open');
const filterModalClose = document.querySelector('.filter-modal__close');
const filterModalBg = document.querySelector('.filter-modal__bg');

if (filterModalOpen.length) {
    filterModalOpen.forEach(btn => {
        btn.onclick = () => {
            filterModal.classList.add('active');
            bodyHidden();
        }
    })
    
    const closeModal = () => {
        filterModal.classList.remove('active');
        bodyVisible();
        filterModal.classList.add('end-active');
        setTimeout(() => {
            filterModal.classList.remove('end-active')
        }, 400);
    }
    filterModalBg.onclick = () => closeModal();
    filterModalClose.onclick = () => closeModal();
}

const productChildSwp = new Swiper('.product .child-swp .swiper', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    breakpoints: {
        991: {
            slidesPerView: 6,
            direction: "vertical"
        }
    }
})

const productParentSwp = new Swiper('.product .parent-swp .swiper', {
    slidesPerView: 1,
    effect: 'fade',
    thumbs: {
        swiper: productChildSwp,
    },
})

const productAcc = document.querySelectorAll('.product-accordion');

if (productAcc.length) {
    productAcc.forEach((item) => {
        const accBtn = item.querySelector('.product-accordion__btn');
        const accBody = item.querySelector('.product-accordion__body-wrap');

        accBtn.addEventListener('click', () => {
            accBtn.classList.toggle('active')
            accBody.style.maxHeight = accBody.style.maxHeight ? null : accBody.scrollHeight + 'px';
        });
    });
}

const productBtn = document.querySelector('.product .btns .btn-red');
const productEl = document.querySelector('.product .btns');

if (productBtn) {
    productBtn.onclick = () => {
        productEl.classList.add('active')
    }
}

const calculation = document.querySelectorAll('.calculation');

if (calculation.length) {
    calculation.forEach(el => {
        const minus = el.querySelector('.minus');
        const plus = el.querySelector('.plus');
        const text = el.querySelector('span');
        const textInp = el.querySelector('input');

        minus.onclick = () => {
            if (parseInt(textInp.value) > 1) {
                text.textContent = parseInt(textInp.value) - 1;
                textInp.value = parseInt(textInp.value) - 1;
            }
        }
        
        plus.onclick = () => {
            text.textContent = parseInt(textInp.value) + 1;
            textInp.value = parseInt(textInp.value) + 1;
        }
    })
}

const likeProductSwp = new Swiper('.like-product__swp', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    loop: true,
    breakpoints: {
        991: {
            slidesPerView: 'auto',
            spaceBetween: 20,
        }
    },
    navigation: {
        nextEl: '.like-product .swp-next',
        prevEl: '.like-product .swp-prev',
    }
})

if (document.querySelector('.like-product__swp')) {
    const likeProductSwpPagination = document.querySelector('.like-product .swp-fraction');
    likeProductSwpPagination.innerHTML = `<span>${likeProductSwp.realIndex + 1} /</span> ${likeProductSwp.slides.length}`;
    likeProductSwp.on('slideChange', function (e) {
        likeProductSwpPagination.innerHTML = `<span>${likeProductSwp.realIndex + 1} /</span> ${likeProductSwp.slides.length}`;
    });
}

const basketModal = document.querySelector('.basket-modal');
const basketModalOpen = document.querySelectorAll('.basket-modal__open');
const basketModalClose = document.querySelector('.basket-modal__close');
const basketModalBg = document.querySelector('.basket-modal__bg');

if (basketModalOpen.length) {
    basketModalOpen.forEach(btn => {
        btn.onclick = () => {
            basketModal.classList.add('active');
            bodyHidden();
        }
    })
    
    const closeModal = () => {
        basketModal.classList.remove('active');
        bodyVisible();
        basketModal.classList.add('end-active');
        setTimeout(() => {
            basketModal.classList.remove('end-active')
        }, 400);
    }
    basketModalBg.onclick = () => closeModal();
    basketModalClose.onclick = () => closeModal();
}

const promoCode = document.querySelector('.promocode');
const promoCodeInp = document.querySelector('.promocode-inp');
const promoCodeBtn = document.querySelector('.promocode button');

if (promoCode) {
    promoCodeInp.oninput = event => {
        if (event.target.value != "") {
            promoCode.classList.add('active');
        } else {
            promoCode.classList.remove('active');
        }
    }
    promoCodeBtn.onclick = () => {
        promoCode.classList.remove('active');
        promoCodeInp.value = "";
    }
}

const deliveryAcc = document.querySelectorAll('.delivery-payment__accordion');

if (deliveryAcc.length) {
    deliveryAcc.forEach((item) => {
        const accBtn = item.querySelector('.delivery-payment__accordion-btn');
        const accBody = item.querySelector('.delivery-payment__accordion-body');
    
        accBtn.addEventListener('click', () => {
            accBtn.classList.toggle('active');
            accBody.style.maxHeight = accBody.style.maxHeight ? null : accBody.scrollHeight + 'px';
        });
    });
}

window.addEventListener('click', event => {
    if (catalogSort.length) {
        catalogSort.forEach(el => {
            if (!el.contains(event.target)) el.classList.remove('active');
        })
    }
})