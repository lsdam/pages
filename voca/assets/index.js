'use strict'

const words = [
    {
        spelling: 'compose',
        mean: '구성하다 / 작곡하다',
    },
    {
        spelling: 'literary',
        mean: '문학의',
    },
    {
        spelling: 'literature',
        mean: '문학',
    },
    {
        spelling: 'variety',
        mean: '다양성',
    },
    {
        spelling: 'aspect',
        mean: '측면, 양상',
    },
    {
        spelling: 'influential',
        mean: '영향력있는',
    },
    {
        spelling: 'foremost',
        mean: '가장 중요한',
    },
    {
        spelling: 'course',
        mean: '강의, 강좌',
    },
    {
        spelling: 'imaginary',
        mean: '상상에만 존재하는, 가상의',
    },
    {
        spelling: 'author',
        mean: '작가, 저자',
    },
    {
        spelling: 'practice',
        mean: '관행, 관례',
    },
    {
        spelling: 'habit',
        mean: '습관, 버릇',
    },
    {
        spelling: 'fictitious',
        mean: '허구의, 지어낸',
    },
    {
        spelling: 'nobleman',
        mean: '상류층',
    },
    {
        spelling: 'unconventional',
        mean: '관습에 얽매이지 않는',
    },
    {
        spelling: 'controversial',
        mean: '논란이 많은',
    },
    {
        spelling: 'viewpoint',
        mean: '관점',
    },
    {
        spelling: 'encounter',
        mean: '맞닥뜨리다, 접하다, 마주하다',
    },
    {
        spelling: 'contentious',
        mean: '논쟁을 초래할',
    },
    {
        spelling: 'translator',
        mean: '번역가',
    },
    {
        spelling: 'diplomacy',
        mean: '외교',
    },
    {
        spelling: 'political',
        mean: '정치의, 정치적인',
    },
    {
        spelling: 'unrest',
        mean: '불만, 불안',
    },
    {
        spelling: 'inherit',
        mean: '상속받다',
    },
    {
        spelling: 'promising',
        mean: '유망한, 촉망되는',
    },
    {
        spelling: 'ultimately',
        mean: '결국',
    },
    {
        spelling: 'unprofitable',
        mean: '수익을 내지 못한',
    },
    {
        spelling: 'decade',
        mean: '10년',
    },
    {
        spelling: 'meanwhile',
        mean: '그 동안에',
    },
    {
        spelling: 'participate',
        mean: '참가하다, 참석하다',
    },
    {
        spelling: 'daring',
        mean: '대담한',
    },
    {
        spelling: 'available',
        mean: '구할 수 있는',
    },
    {
        spelling: 'criticism',
        mean: '비판, 비난',
    },
    {
        spelling: 'attention',
        mean: '주의, 주목',
    },
    {
        spelling: 'mystical',
        mean: '신비주의의',
    },
    {
        spelling: 'poetry',
        mean: '시',
    },
    {
        spelling: 'manuscript',
        mean: '원고',
    },
    {
        spelling: 'bold',
        mean: '대담한',
    },
]

function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5)
}

const shuffleWords = shuffle(words) // 셔플된 단어 원본 배열

const wordCard = document.getElementById('word-card')
const spelling = document.getElementById('spelling')
const mean = document.getElementById('mean')

const btnPrev = document.querySelector('.word-card__btn--prev')
const btnNext = document.querySelector('.word-card__btn--next')

const meanSwitch = document.getElementById('mean-switch')

const startIndex = 0
const endIndex = shuffleWords.length - 1
let currentIndex = startIndex

setMeanSwitchStatus()
setMeanStatus()
setWord()
updateBtnStatus()

function setMeanSwitchStatus() {
    if (getCookie('show-mean')) {
        meanSwitch.setAttribute('checked', 'checked')
    } else {
        meanSwitch.removeAttribute('checked')
    }
}

function setMeanStatus() {
    if (getCookie('show-mean')) {
        mean.classList.remove('u-hidden')
    } else {
        mean.classList.add('u-hidden')
    }
}

function setWord() {
    spelling.innerText = shuffleWords[currentIndex].spelling
    mean.innerText = shuffleWords[currentIndex].mean
}

function updateBtnStatus() {
    if (currentIndex === 0) {
        btnPrev.setAttribute('disabled', 'disabled')
    } else {
        btnPrev.removeAttribute('disabled')
    }

    if (currentIndex === shuffleWords.length - 1) {
        btnNext.setAttribute('disabled', 'disabled')
    } else {
        btnNext.removeAttribute('disabled')
    }
}

function goToPrev() {
    if (currentIndex > 0) currentIndex -= 1
    updateBtnStatus()
    setWord()
}

function goToNext() {
    if (currentIndex < endIndex) currentIndex += 1
    updateBtnStatus()
    setWord()
}

function changeMeanSwitch(checkbox) {
    if (checkbox.checked) {
        // cookie set
        setCookie('show-mean', 1, 30)

        setMeanStatus()

    } else {
        // cookie remove
        removeCookie('show-mean')

        setMeanStatus()
    }
}

// function changeClearSwitch(checkbox) {
//     if (checkbox.checked) {
//         spelling.classList.add('is-strike')
//     } else {
//         spelling.classList.remove('is-strike')
//     }
// }

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function removeCookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}