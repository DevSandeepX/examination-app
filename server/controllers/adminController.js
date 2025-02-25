const addStudent = async (req, res) => {
    /*
     1. take input from frontend --> name, rollNumber, image, course
     2. validate - empty
     3. check if user is allready exist
     4. handle file upload get file from req.file store it into public/temp folder with a unique 
     name get url and stor url into database
     5. finaly create a new student and save it into database
     6. return response with success and a message

    */

    const { name, rollNumber, course } = req.body

    if (!name || !rollNumber || !course) {
        return res.json({ success: false, message: "Fields are missing " })
    }
    
    try {
        const image = req.file?.image
        console.log(image)
    } catch (error) {
        return res.json({ success: false, message: error.message })
    }

}


const addQuestion = async (req, res) => {
    /*
    1. get details from frontend
    2. validate field is not empty
    3. check question is already exist in database
    4. create a new question and save it into db
    5. return response with success and a message
    */

}


export { addStudent, addQuestion }