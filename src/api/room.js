import axiosSecure from '.'

// get all room data
export const getAllRooms = async () => {
    const { data } = await axiosSecure('/rooms')
    return data;
}

// fetch single room data
export const getRoom = async (id) => {
    const { data } = await axiosSecure(`/room/${id} `)
    return data;
}