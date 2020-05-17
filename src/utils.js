export default {
    formatCurrency: function(num){
        return '₹' + parseFloat(num).toFixed(1) + ' ';
    }
}