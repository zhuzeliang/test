/**
 * Created by hyt on 2018/1/3.
 */
function saveItem(val,Item){
    var localStorage = window.localStorage
    try {
        localStorage.setItem(val, JSON.stringify(Item))
    } catch (error) {
        console.log(val+" save error");
    }
}

function getItem(key){
    var localStorage = window.localStorage
    try {
        const Item = localStorage.getItem(key);
        if (!Item) {
            return null;
        }
        return Item;

    } catch (error) {
        console.log(key+" get error");
        return null;
    }
}

function removeItem(key){
    var localStorage = window.localStorage
    try {
        if (localStorage.getItem(key) != null) {
            localStorage.removeItem(key);
        }
    } catch (error) {
        console.log(key+" remove error");
    }
}