// random item
function choice(items) {
    let index = Math.floor(Math.random() * items.length);
    return items[index];
}


// removed first matching item from items if itam exits and returns it. overwise returns undefined
function remove(item, items) {
    for (let i = 0; i < items.length; i++) {
        if(items[i] === item) {
            return [...items.slice(0,i), ...items.slice(i + 1)];
        }
    }
}

export { choice, remove };