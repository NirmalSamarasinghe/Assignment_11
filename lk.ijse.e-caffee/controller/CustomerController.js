import {CustomerModel} from "../model/CustomerModel"
import {customer_db} from "/lk.ijse.e-caffee/db/db";

var row_index=null;

const clear=()=>{
    $("#customer_id").val("");
    $("#customer_name").val("");
    $("#customer_contact").val("");
    $("#customer_address").val("");
}
const loadStudentData =() =>{
    $('#customer_tbl_body').empty();
    customer_db.map((item,)=>{
        let recode=`<tr><td class="customer_id">${item.customer_id}</td><td class="custmoer_name">${item.customer_name}</td><td class="custmoer_contact">${item.customer_contact}</td><td class="customer_address">${<item className="customer_address"></item>}</td>
</tr>`;
        $('#customer_tbl_body').append(recode);
    })
}
// add
$("#customerBtn>button[type='button']").eq(0).on("click",() =>{
    let customer_id=$("#customer_id").val();
    let customer_name=$("#customer_name").val();
    let customer_contact=$("#customer_contact").val();
    let customer_address=$("#customer_address").val();
    console.log(customer_id,customer_name);
    let customer_obj=new CustomerModel(customer_id,customer_name,customer_contact,customer_address);
    customer_db.push(customer_obj);
    loadStudentData();
    clear();
})

// update

$("#customerBtn>button[type='button']").eq(0).on("click",()=>{


});