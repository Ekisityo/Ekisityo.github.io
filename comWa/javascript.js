  $('#send-it').click(function() {
    var walink = 'https://web.whatsapp.com/send',
        phone = '6288801678323'; // Your WhatsApp number
    // Mobile Support
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        var walink = 'whatsapp://send';
    }
    var inputChat = $('#chatInput').val(), // Getting the user message input
        input_viaUrl = location.href; // Getting the current URL
    var bytesvibe_whatsapp = walink + '?phone=' + phone + '&text=' + inputChat + '%0A%0A' + 'Sent via: ' + input_viaUrl;
    // Open WhatsApp window
    window.open(bytesvibe_whatsapp, '_blank');
    window.location.href = input_viaUrl; // Refresh the page after message is sent
});