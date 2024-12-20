function submitForm() {
    const emailInput = document.getElementById('email').value;
    if (!emailInput.includes('@')) {
        alert("Ошибка: почта должна содержать '@'.");
        return;
    }

    document.querySelectorAll('.input-field').forEach(input => input.value = '');
    alert(  "Наши сотрудники свяжутся с вами с 12:00 до 20:00, отправив сообщение на указанную почту и номер телефона в WhatsApp.");
}