interface PropsCard {
    children:JSX.Element | JSX.Element[],
    text:string,
}

export const UICard = ({children, text}:PropsCard) => {
    return (
        <div className="flex flex-col shadow-lg border-2 p-10 w-full sm:w-4/5 ">
            <h3 className="text-2xl text-center">{text} (.csv)</h3>
            <div className="flex justify-center flex-wrap">
                {children}
            </div>
        </div>
    )
}