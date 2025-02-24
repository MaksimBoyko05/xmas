function succesWindow(message) {
    const element = document.createElement('div');
    element.style.width = '200px';
    element.style.height = '50px';
    element.style.backgroundColor = '#fafafa';
    element.style.color = 'black';
    element.style.display = 'flex';
    element.style.justifyContent = 'center';
    element.style.alignItems = 'center';
    element.style.position = 'fixed';
    element.style.top = '10%'; // Начальная позиция за экраном
    element.style.left = '50%';
    element.style.transform = 'translate(-50%, -150%)'; 
    element.style.borderRadius = '10px';
    element.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    element.style.transition = 'transform 0.5s ease-in-out'; // Анимация по Y

    element.innerText = message;
    document.body.appendChild(element);

    // Двигаем элемент вниз
    setTimeout(() => {
        element.style.transform = 'translate(-50%, 0)';
    }, 10);

    // Исчезновение через 3 секунды
    setTimeout(() => {
        element.style.transform = 'translate(-50%, -100%)';
        element.display = 'none'; // Уходит вверх
        setTimeout(() => {
            document.body.removeChild(element);
        }, 200);
    }, 2000);
}

document.getElementById("myButton").addEventListener("click", function() {
    succesWindow('Замовлення прийнято!🌷');
});
