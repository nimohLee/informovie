const commons = {
    getToday(){
        const date = new Date();
        const today = `${date.getFullYear()}${date.getMonth()+1}${date.getDate()}`;
        return today.toString();
    }
}

export default commons;