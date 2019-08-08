const SAVE_COUNTRY = 'SAVE_COUNTRY'
const saveCountry = ( payload: Object ) => ({
    type: SAVE_COUNTRY,
    payload
})

export const ActionsType = {
    saveCountry : SAVE_COUNTRY
} 

export const Actions = {
    saveCountry
}