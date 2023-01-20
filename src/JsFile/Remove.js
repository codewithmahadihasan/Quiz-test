import Swal from "sweetalert2";


export const removeTags = (str) => {
    if ((str === null) || (str === ''))
        return false;
    else
        str = str.toString();
    return str.replace(/(<([^>]+)>)/ig, '');
}

export const handelToClick = (option, right) => {

    if (option === right) {
        Swal.fire({
            icon: 'success',
            title: 'Wow Good Job',

        })
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Sorry Worng Answer',
        })
    }
}

