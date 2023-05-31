function generatePassword() {
    var length = parseInt(document.getElementById('length').value);
    var uppercase = document.getElementById('uppercase').checked;
    var numbers = document.getElementById('numbers').checked;
    var symbols = document.getElementById('symbols').checked;
    
    if (length > 50) {
      document.getElementById('warning-message').style.display = 'block';
      return;
    } else {
      document.getElementById('warning-message').style.display = 'none';
    }

    if (length < 6) {
        document.getElementById('second-warning-message').style.display = 'block';
        return;
      } else {
        document.getElementById('second-warning-message').style.display = 'none';
      }

    var charset = 'abcdefghijklmnopqrstuvwxyz';
    if (uppercase) {
        charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (numbers) {
        charset += '0123456789';
    }
    if (symbols) {
        charset += '!@#$%^&*()';
    }

    var password = '';
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    var passwordInput = document.getElementById('password');
    passwordInput.value = password;
    passwordInput.style.width = (password.length * 10) + 'px';

    var passwordContainer = document.getElementById('password-container');
    passwordContainer.classList.add('show');
}

function copyPassword() {
    var passwordInput = document.getElementById('password');
    passwordInput.select();
    passwordInput.setSelectionRange(0, 99999);
    document.execCommand('copy');
    alert('Password copied to clipboard!');
}

document.getElementById('generate-btn').addEventListener('click', function() {
    generatePassword();
    setTimeout(function() {
        var copyBtn = document.getElementById('copy-btn');
        copyBtn.style.opacity = '1';
        copyBtn.style.transform = 'scale(1)';
    }, 500);
});

document.getElementById('copy-btn').addEventListener('click', copyPassword);
document.getElementById('generate-btn').addEventListener('click', generatePassword);

