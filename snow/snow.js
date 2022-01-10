function snow()
{
    const section = document.querySelector('section');
    const snow = document.createElement('span')

    var size = Math.random() * 50;

    snow.style.width = 20 + size + 'px';
    snow.style.height = 20 + size + 'px';
    snow.style.left = Math.random() * innerWidth + 'px';
    snow.style.top = Math.random() * innerHeight + 'px';

    const bg = colors[Math.floor(Math.random() * colors.length)]
    snow.style.background = bg;

    section.appendChild(snow);

    setTimeout(()=>{
        snow.remove()
    }, 5000);
}