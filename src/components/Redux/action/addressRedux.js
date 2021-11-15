export const Add_Ward = 'Add_Ward' || 'Ward';
export const Add_District = 'Add_District' || 'District'



export const AddWard_Action = (data) => {
    return {
        type: Add_Ward,
        payload: data
    }
}
export const AddDistrict_Action = (data) => {
    return {
        type: Add_District,
        payload: data
    }
}
