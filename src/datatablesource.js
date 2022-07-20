export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {   field: 'user', 
        headerName: 'user', 
        width:400,
        renderCell:(params)=>{
        return(
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt="avatar" />
                {params.row.username}
            </div>
            );
        },
    },

    {
        field: 'email',
        headerName: 'Email',
        width: 350
    },

    {
        field: 'age',
        headerName: 'Age',
        width: 100
    },

    {
        field: 'status',
        headerName: 'Status',
        width: 200,
        renderCell:(params)=>{
            return(
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        }
    },
];

export const userRows = [
    {
        id: 1,
        username: "Snow",
        img:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        status:"active",
        email: "snow@gmail.com",
        age: 35,

    },
    {
        id: 2,
        username: "Snow",
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        status: "active",
        email: "snow@gmail.com",
        age: 55,

    },
    {
        id: 3,
        username: "Snow",
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        status: "active",
        email: "snow@gmail.com",
        age: 32,

    },
    {
        id: 4,
        username: "Snow",
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        status: "active",
        email: "snow@gmail.com",
        age: 25,

    },
    {
        id: 5,
        username: "Snow",
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        status: "active",
        email: "snow@gmail.com",
        age: 45,

    },
    {
        id: 6,
        username: "Snow",
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        status: "active",
        email: "snow@gmail.com",
        age: 40,

    },
    {
        id: 7,
        username: "Snow",
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        status: "active",
        email: "snow@gmail.com",
        age: 20,

    },
    {
        id: 8,
        username: "Snow",
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        status: "active",
        email: "snow@gmail.com",
        age: 18,

    },
    {
        id: 9,
        username: "Snow",
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        status: "active",
        email: "snow@gmail.com",
        age: 65,

    },
    {
        id: 10,
        username: "Snow",
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        status: "active",
        email: "snow@gmail.com",
        age: 65,

    },
    {
        id: 11,
        username: "Snow",
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        status: "active",
        email: "snow@gmail.com",
        age: 65,

    },
    {
        id: 12,
        username: "Snow",
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        status: "active",
        email: "snow@gmail.com",
        age: 65,

    },
    {
        id: 13,
        username: "Snow",
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        status: "active",
        email: "snow@gmail.com",
        age: 65,

    },
    {
        id: 14,
        username: "Snow",
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        status: "active",
        email: "snow@gmail.com",
        age: 65,

    },
    {
        id: 15,
        username: "Snow",
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        status: "active",
        email: "snow@gmail.com",
        age: 65,

    },
    {
        id: 16,
        username: "Snow",
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        status: "active",
        email: "snow@gmail.com",
        age: 65,

    },
    {
        id: 17,
        username: "Snow",
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        status: "active",
        email: "snow@gmail.com",
        age: 65,

    },
    {
        id: 18,
        username: "Snow",
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        status: "active",
        email: "snow@gmail.com",
        age: 65,

    },
    {
        id: 19,
        username: "Snow",
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        status: "active",
        email: "snow@gmail.com",
        age: 65,

    },
    {
        id: 20,
        username: "Snow",
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        status: "active",
        email: "snow@gmail.com",
        age: 65,

    },
    {
        id: 21,
        username: "Snow",
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        status: "active",
        email: "snow@gmail.com",
        age: 65,

    },
    {
        id: 22,
        username: "Snow",
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        status: "active",
        email: "snow@gmail.com",
        age: 65,

    },
    {
        id: 23,
        username: "Snow",
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        status: "active",
        email: "snow@gmail.com",
        age: 65,

    },
]