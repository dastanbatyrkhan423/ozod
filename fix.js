// Временный скрипт для исправления обработчика кнопки
document.addEventListener('DOMContentLoaded', function() {
    const clickButton = document.getElementById('clickButton');
    const welcomeScreen = document.getElementById('welcomeScreen');
    const questScreen = document.getElementById('questScreen');
    
    if (clickButton) {
        // Удаляем все существующие обработчики
        clickButton.replaceWith(clickButton.cloneNode(true));
        const newClickButton = document.getElementById('clickButton');
        
        // Добавляем новый обработчик с музыкой
        newClickButton.addEventListener('click', () => {
            playMusic(); // Запускаем музыку сразу
            welcomeScreen.style.display = 'none';
            questScreen.style.display = 'flex';
        });
    }
});
