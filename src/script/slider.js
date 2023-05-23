const img = document.querySelector('.images');


const setEntity = (index) => {
	img.classList.add(`slide_${index}`);
	document.querySelector(`.dot_${index}`).setAttribute('fill', '#9E98DC')	
}

const dots_0 = document.querySelector('.dots_0')
const dots_1 = document.querySelector('.dots_1')
const dots_2 = document.querySelector('.dots_2')
const dot_0 = document.querySelector('.dot_0')
const dot_1 = document.querySelector('.dot_1')
const dot_2 = document.querySelector('.dot_2')
let currentIndex = 0

function clearAtribut() {
    for(let i = 0; i < 3; i++) {
        if(img.classList.contains(`slide_${i}`)) {
            img.classList.remove(`slide_${i}`)
        }
    }
	if ((dot_0.getAttribute('fill') === '#9E98DC')){
		dot_0.setAttribute('fill', '#EFEEF6');
	} else if (dot_1.getAttribute('fill') === '#9E98DC'){
		dot_1.setAttribute('fill', '#EFEEF6');
	} else {
		dot_2.setAttribute('fill', '#EFEEF6');
	}
};

function SliderInterval() {
    clearAtribut()
	if (currentIndex < 2) {
		currentIndex += 1;
		setEntity(currentIndex);
		document.querySelector(`.dot_${currentIndex - 1}`).setAttribute('fill', '#EFEEF6');
	}else if (currentIndex >= 2) {
		document.querySelector(`.dot_${currentIndex}`).setAttribute('fill', '#EFEEF6');
		currentIndex = 0;
		setEntity(currentIndex);
	}	
};

dots_0.addEventListener('click', () => {
	clearAtribut()
	setEntity(0)
	currentIndex = 0
});

dots_1.addEventListener('click', () => {
	clearAtribut()
	setEntity(1)
	currentIndex = 1
});

dots_2.addEventListener('click', () => {
	clearAtribut()
	setEntity(2)
	currentIndex = 2
});

setInterval(SliderInterval, 5000);