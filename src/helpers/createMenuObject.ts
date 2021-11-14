type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish';

export const createMenuObject = (activateMenu: MenuOptions) => {
    let returnObject  = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    };
    if(activateMenu !== ''){
        returnObject[activateMenu] = true;
    }
    return returnObject;
};

