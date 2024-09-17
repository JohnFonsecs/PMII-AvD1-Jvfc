import clsx from "clsx";
import { createContext, useContext } from "react";
import { ActivityIndicator, Pressable, PressableProps, Text, TextProps } from "react-native";

type Variants = "primary" | "secondary"

type ButtonProps = PressableProps & {
    variant?: Variants
    isLoading?: boolean
}

const ThemeContext = createContext<{variant?: Variants}>({})


function Button({variant = "primary" ,children, isLoading, ...rest} : ButtonProps) {
    return (
        <ThemeContext.Provider value={{variant}}>
            <Pressable 
                style={({pressed}) => ({opacity: pressed ? 0.5 : 1})}
                className={clsx("w-1/2 h-11 flex-row items-center justify-center gap-2 rounded-lg", {
                    "bg-lime-300": variant === "primary",
                    "bg-transparent": variant === "secondary",
                })}
                disabled={isLoading}{...rest}>
                {isLoading ? <ActivityIndicator className="text-lime-950"/> : children}
            </Pressable>
        </ThemeContext.Provider>
    );
}
function Title({children}: TextProps) {
    const {variant} = useContext(ThemeContext)
    return <Text className={clsx("text-base font-semibold",{
        "text-lime-950": variant === "primary",
        "text-zinc-200": variant === "secondary"
    })}>{children}</Text>
}

Button.Title = Title

export {Button}

{/* The following is a list of relevant code snippets in the repository the developer is working on */}