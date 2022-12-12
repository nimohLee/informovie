const commons = {
    getYesterday(){
        const date = new Date();
        const today = `${date.getFullYear()}${date.getMonth()+1}${date.getDate()-1}`;
        return today.toString();
    },
    getCurrentYear(){
        return new Date().getFullYear();
    }
}

export default commons;