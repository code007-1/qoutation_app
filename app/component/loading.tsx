export function Loading() {
    return (
        <>
            <div className="absolute z-100 bg-red-200/25 flex items-center justify-center space-x-4">
                <div className="w-4 h-4 bg-textPrimary rounded-full animate-bounce"></div>
                <div style={{ animationDelay: "500ms" }} className="w-4 h-4 bg-textPrimary rounded-full animate-bounce"></div>
                <div style={{ animationDelay: "1000ms" }} className="w-4 h-4 bg-textPrimary rounded-full animate-bounce"></div>
            </div>
        </>
    );
}