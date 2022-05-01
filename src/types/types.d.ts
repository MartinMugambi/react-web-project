export interface User{
    id: number
    name: string
    email: string
    username: string
    address: {
        street: string
        suite: string
        city: string
        zipcode: string
        geo: {
            lat: string
            lng: string
        }
    }
  
  }


  export interface UserData{
    loading: boolean
    data: User[]
    error: boolean | string
    id: number
    name: string
  }
  


export interface PostData{
    userId: number
    id:number
    title: string
    body: string
}

export  interface Post{
    loading: boolean
    data:  PostData[]
    error: boolean | string
}