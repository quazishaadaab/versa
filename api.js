import {createClient} from '@supabase/supabase-js'

//for supabase
//const supabase = createClient(process.env.SUPABASE_DB_URL, process.env.SUPABASE_DB_APIKEY)
const supabase = createClient('https://muejtccxudbkjpyehaxm.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im11ZWp0Y2N4dWRia2pweWVoYXhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUzNzEzNjcsImV4cCI6MjAzMDk0NzM2N30.VdAgq78sJmRrgKKdbUCoFFAx2ftC1rTkLKN1xafs4Ec')

const postEmail=async(email)=>{

    try{
        //insert all the room values along with an empty users array. we need to insert an empty users array or else we cannot append json into array.
        //await pool.query("INSERT INTO rooms_postgres_2 (roomID,roomname,users,room_type) VALUES ($1,$2,$3,$4);",[roomID,roomname,'[]',room_type])

        const {data,error} = await supabase.rpc('postEmail',{email:email}) //users MUST have a blank array ( not a stringified array but a real array data type). if left empty, postUsersinRoom will not work/fill it 
        console.log(data,error)
        if(!error){return "Success your room has been posted"}else{return error}
        

    }
    catch(error){
        console.log(error)
    }

}

postEmail('jungle@gmail.com')