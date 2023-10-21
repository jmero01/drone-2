"use client";
import {  Menu, Moon, ShoppingCart, Sun } from "lucide-react"
import { Container } from "../container"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import Link from "next/link"
import { Button } from "../ui/button"
import { ProfileButton } from "./ProfileButton"
import { useTheme } from "next-themes";



const routes = [
    {
        href: "/",
        label: "",
    },
    {
        href: "/categories",
        label: "Categories",
    },
    {
        href: "/about-us",
        label: "About Us",
    },
    {
        href: "/contact-us",
        label: "Contact Us",
    },
]

export const Header = () => {
    const {theme, setTheme} = useTheme();
  return (
    <div>
        <header className="sm:flex sm:justify-between py-3 px-4 border-b border-black">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
                    <div className="flex items-center">
                        <Sheet>
                            <SheetTrigger>
                                <Menu className="h-6 w-6 md:hidden"/>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-[18.75rem] sm:w-[25rem]">
                                <nav className="flex flex-col gap-4">
                                    {routes.map((route)=> (
                                        <Link
                                        key={route.href}
                                        href={route.href}
                                        className="block px-2 py-2 text-lg"
                                        aria-label={route.label}
                                        >
                                            {route.label}
                                        </Link>
                                    ))}
                                </nav>
                            </SheetContent>
                        </Sheet>
                        {/* Logo & Text */}
                        <Link
                        href="/"
                        className="ml-4 lg:ml-0"
                        >
                            <h1 className="text-xl font-bold">BRAND NAME</h1>
                        </Link>
                    </div>
                    <nav className="mx-6 items-center space-x-4 lg:space-x-6 hidden md:block">
                        {routes.map((route)=> (
                            <Button
                            asChild variant="ghost"
                            key={route.href}
                            >
                                <Link
                                href={route.href}
                                className="text-sm font-medium transition-colors"
                                >
                                    {route.label}
                                </Link>
                            </Button>
                        ))}
                    </nav>
                    <div className="flex items-center">
                        <Button
                        variant="ghost"
                        size="icon"
                        className="mr-2"
                        aria-label="Shopping Cart"
                        >
                            <ShoppingCart className="h-6 w-6"/>
                            <span className="sr-only">Shopping Cart</span>
                        </Button>
                        <Button
                        variant="ghost"
                        size="icon"
                        aria-label="Toggle Theme"
                        className="mr-6"
                        onClick={()=>setTheme(theme === "dark" ? "light" : "dark")}
                        >
                            <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
                            <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
                            <span className="sr-only">Toggle Theme</span>
                        </Button>
                        <ProfileButton/>
                    </div>
                </div>
            </Container>
        </header>
    </div>
  )
};
