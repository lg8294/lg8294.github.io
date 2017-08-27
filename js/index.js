
blogBtn = document.querySelector('.blog');
otherBtn = document.querySelector('.other');

blogBtn.addEventListener('click', () => {
	location.href = '/myblog/';
});

otherBtn.addEventListener('click', () => {
	location.href = '/other/';
});