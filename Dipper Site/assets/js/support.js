async function sendTransaction() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const accounts = await window.ethereum.request({ method: 'eth_accounts' });
            const sender = accounts[0];
            const amount = '0x12a05f200'; // Сумма пожертвования в Wei 
            const transactionParameters = {
                from: sender,
                to: '0x7aAb78B84C62dAf975d6a689F46B2C7192b6D608', // Замените на ваш адрес Ethereum
                value: amount,
            };
            await window.ethereum.request({ method: 'eth_sendTransaction', params: [transactionParameters] });
            console.log('Transaction successful');
        } catch (error) {
            console.error(error);
            // Обработка ошибок
        }
    } else {
        alert('MetaMask is not installed or not available');
    }
}