function updateStatus(selectElement, cardId) {
    const card = document.getElementById(cardId);
    const status = selectElement.value;

    // مسح الكلاسات القديمة
    card.classList.remove('status-completed', 'status-pending', 'status-progress');

    // إضافة الكلاس الجديد بناءً على الاختيار
    if (status === 'completed') {
        card.classList.add('status-completed');
        console.log(`تم تحديث الموعد ${cardId} إلى: مكتمل`);
    } else if (status === 'pending') {
        card.classList.add('status-pending');
    } else if (status === 'progress') {
        card.classList.add('status-progress');
    }
}

// تنفيذ الوظيفة مرة عند التحميل لضبط الألوان الابتدائية
document.querySelectorAll('.status-control select').forEach((select, index) => {
    updateStatus(select, `app-${index + 1}`);
});
