"use strict";

const form = document.getElementById('form');

if(form){
    const urlParams = new URLSearchParams(window.location.search);

    const updateID = urlParams.get('updateID');

    form.addEventListener('submit', async(e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const jsondata = {};

        formData.forEach((value, key) => {
            jsondata[key] = value;
        });
        try{                
            const response = await axios.post('/admin/add-product', jsondata);
            console.log('Data saved! ', response.data);
            if(updateID){
                window.location.href = '/admin/admin-product';
            }
            form.reset();
        }
        catch(error){
            console.log('error while saving data', error);
        }
    });
}

const adminList = document.getElementById('admin-list');

if(adminList){
    adminList.addEventListener('click', async(e) => {
        try{      
            if(e.target.classList.contains('delete')){
                const id = e.target.getAttribute('data-id');
                const response = await axios.delete(`/admin/admin-product?deleteID=${id}`);
                console.log('Data deleted', response.data);
    
                e.target.parentElement.parentElement.parentElement.remove();
            }
        }
        catch(error) {
            console.log('error while deleting data', error);
        }
    });
}
