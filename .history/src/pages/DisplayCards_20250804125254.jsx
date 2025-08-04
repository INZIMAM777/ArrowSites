export const DisplayCards=()=>{
     useEffect(() => {
        firebase.getLists().then((booksSnapshot) => {
            const bookData = booksSnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            setBooks(bookData);
        });
    }, []);
    return(<>

    </>)
}