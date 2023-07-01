const ColorText = ({ children, color }: any) => {
    const gradient = color == 'pink' ? 'from-pink-500 to-pink-700' : 'from-blue-500 to-blue-700';
    return (
        <span className={`text-transparent bg-clip-text bg-gradient-to-t ${gradient} font-bold`}>{children}</span>
    )
}

export default ColorText;