export function Header(){

    return(
        <header className="sticky top-0 flex flex-col h-10 bg-blue-900 text-center w-full justify-center p-5 shadow-2xl z-50">
            <div>
                <h1 className="margin-5 text-white text-2xl">To-do List</h1>
            </div>
        </header>
    )
}
export function Footer(){
    return(
        <footer className="sticky bottom-0 flex flex-col h-10 bg-blue-900 text-center w-full justify-center z-50">
            <div>
                <h1 className="margin-5 text-white text-2xl">Crie sua lista de Tarefas</h1>
            </div>
        </footer>
    )
}
