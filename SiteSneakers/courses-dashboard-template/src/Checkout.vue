<template>
    <div class="relative min-h-screen lg:flex">
        <header class="text-gray-100 bg-gray-800 lg:hidden">
            <div class="container flex items-center justify-between p-4 mx-auto">
                <a href="#" class="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                </a>
                
                <button @click="isOpen = !isOpen" class="p-2 text-white rounded-lg focus:outline-none hover:bg-gray-700">
                    <svg v-show="!isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
    
                    <svg v-show="isOpen" class="w-6 h-6 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </header>

        <div v-cloak :class="isOpen ? 'block' : 'hidden'" @click="isOpen = false" class="fixed inset-0 z-20 transition-opacity bg-black opacity-30 lg:hidden"></div>

        <aside id="sidebar" :class="isOpen ? 'translate-x-0 ease-in' : '-translate-x-full ease-out'" class="fixed inset-y-0 left-0 z-30 flex flex-col w-24 min-h-screen space-y-6 overflow-y-auto text-gray-100 transition duration-200 transform bg-gray-800 lg:translate-x-0 lg:relative lg:inset-0">
            <div class="flex flex-col items-center flex-1 space-y-6">
                <a href="index.html" class="flex items-center justify-center w-full h-20 font-bold text-white truncate bg-blue-600 whitespace-nowrap">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                </a>

                <nav class="flex flex-col items-center space-y-6">
                    <a href="index.html" class="p-3 transition-colors duration-300 rounded-lg group hover:bg-white">
                        <svg class="w-6 h-6 group-hover:stroke-blue-700 " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg">
                            <path class="group-hover:stroke-blue-700" d="M22 18.2222C22 18.6937 21.7893 19.1459 21.4142 19.4793C21.0391 19.8127 20.5304 20 20 20H4C3.46957 20 2.96086 19.8127 2.58579 19.4793C2.21071 19.1459 2 18.6937 2 18.2222V5.77778C2 5.30628 2.21071 4.8541 2.58579 4.5207C2.96086 4.1873 3.46957 4 4 4H9L11 6.66667H20C20.5304 6.66667 21.0391 6.85397 21.4142 7.18737C21.7893 7.52076 22 7.97295 22 8.44444V18.2222Z" fill="#969CBA" fill-opacity="0.2" stroke="#969CBA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>

                    <a href="tasks.html" class="p-3 transition-colors duration-300 rounded-lg group hover:bg-white">
                        <svg class="w-6 h-6 group-hover:stroke-blue-700 " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class=" group-hover:stroke-blue-700" d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" fill="#969CBA" fill-opacity="0.2" stroke="#969CBA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path class=" group-hover:stroke-blue-700" d="M22 6L12 13L2 6" stroke="#969CBA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>

                    <a href="analitics.html" class="p-3 transition-colors duration-300 rounded-lg group hover:bg-white">
                        <svg class="w-6 h-6 group-hover:stroke-blue-700 " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class=" group-hover:stroke-blue-700" d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" fill="#969CBA" fill-opacity="0.2" stroke="#969CBA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path class=" group-hover:stroke-blue-700" d="M22 6L12 13L2 6" stroke="#969CBA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>

                    <a href="checkout.html" class="p-3 transition-colors duration-300 bg-white rounded-lg">
                        <svg class="w-6 h-6 stroke-blue-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class=" group-hover:stroke-blue-700" d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" fill="#969CBA" fill-opacity="0.2" stroke="#969CBA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path class=" group-hover:stroke-blue-700" d="M22 6L12 13L2 6" stroke="#969CBA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>

                    <a href="release.html" class="p-3 transition-colors duration-300 rounded-lg group hover:bg-white">
                        <svg class="w-6 h-6 group-hover:stroke-blue-700 " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class=" group-hover:stroke-blue-700" d="M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9L13 2Z" fill="#969CBA" fill-opacity="0.2" stroke="#969CBA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path class=" group-hover:stroke-blue-700" d="M13 2V9H20" stroke="#969CBA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                </nav>
            </div>

            <div class="flex justify-center py-5 border-t border-gray-600">
                <a href="#" class="p-3 transition-colors duration-300 rounded-lg group hover:bg-white">
                    <svg class="w-6 h-6 opacity-100 group-hover:stroke-blue-700 " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="group-hover:stroke-blue-700" d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#969CBA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path class="group-hover:stroke-blue-700" d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15V15Z" fill="#969CBA" fill-opacity="0.2" stroke="#969CBA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </a>
            </div>
        </aside>

        <main id="content" class="flex-1 pb-12 space-y-6 overflow-y-auto bg-gray-100 lg:h-screen md:space-y-8">
            <header class="flex items-center justify-between h-20 px-6 bg-white border-b">
                <div class="relative flex items-center">
                    <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </span>
                    
                    <input type="text" class="py-3 pl-10 pr-4 text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-200 rounded-lg sm:w-auto w-36 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" placeholder="Search">
                </div>

                <div class="flex items-center">
                    <div class="relative">
                        <button class="transition-colors duration-300 rounded-lg sm:px-4 sm:py-2 focus:outline-none hover:bg-gray-100" @click="dropdownOpen = !dropdownOpen">
                            <span class="sr-only">User Menu</span>
                            <div class="flex items-center md:-mx-2 ">
                                <div class="hidden md:mx-2 md:flex md:flex-col md:items-end md:leading-tight">
                                    <span class="font-semibold text-gray-800">Kanel</span>
                                    <span class="text-sm text-gray-600">Dashboard</span>
                                </div>
        
                                <img class="flex-shrink-0 w-12 h-12 overflow-hidden bg-gray-100 rounded-full md:mx-2" src="Image/logo.png" alt="user profile photo" >
                            </div>
                        </button>
                        
                        <transition
                            enter-active-class="transition duration-200 ease-out"
                            enter-from-class="transform scale-95 opacity-0"
                            enter-to-class="transform scale-100 opacity-100"
                            leave-active-class="transition duration-75 ease-in"
                            leave-from-class="transform scale-100 opacity-100"
                            leave-to-class="transform scale-95 opacity-0"
                        >
                            <div class="absolute right-0 z-50 w-56 p-2 bg-white border rounded-lg top-16 lg:top-20" v-show="dropdownOpen">
                                <div class="px-4 py-2 text-gray-800 transition-colors duration-300 rounded-lg cursor-pointer hover:bg-gray-100">Profile</div>
                                <div class="px-4 py-2 text-gray-800 transition-colors duration-300 rounded-lg cursor-pointer hover:bg-gray-100">Messages</div>
                                <div class="px-4 py-2 text-gray-800 transition-colors duration-300 rounded-lg cursor-pointer hover:bg-gray-100">Purshases</div>
                                <div class="px-4 py-2 text-gray-800 transition-colors duration-300 rounded-lg cursor-pointer hover:bg-gray-100"><a href="login.html">Log Out</a></div>
                            </div>
                        </transition>
                    </div>

                    <div v-show="dropdownOpen" class="fixed inset-0 z-30" @click="dropdownOpen = false"></div>

        
                    <button class="relative p-2 mx-3 text-gray-400 transition-colors duration-300 rounded-full hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100">
                        <span class="sr-only">Notifications</span>
                        <span class="absolute top-0 right-0 w-2 h-2 mt-1 mr-2 bg-blue-700 rounded-full"></span>
                        <span class="absolute top-0 right-0 w-2 h-2 mt-1 mr-2 bg-blue-700 rounded-full animate-ping"></span>
                        
                        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                    </button>

                    <button class="p-2 text-gray-400 transition-colors duration-300 rounded-full focus:outline-none hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100">
                        <span class="sr-only">Log out</span>
                        
                        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                    </button>
                </div>
            </header>

            <section class="container px-4 mx-auto">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <div>
                        <div class="flex items-center gap-x-3">
                            <h2 class="text-lg font-medium text-gray-800 dark:text-white">Customers</h2>
            
                            <span class="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">240 vendors</span>
                        </div>
            
                        <p class="mt-1 text-sm text-gray-500 dark:text-gray-300">These companies have purchased in the last 12 months.</p>
                    </div>
            
                    <div class="flex items-center mt-4 gap-x-3">
                        <button class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_3098_154395)">
                                <path d="M13.3333 13.3332L9.99997 9.9999M9.99997 9.9999L6.66663 13.3332M9.99997 9.9999V17.4999M16.9916 15.3249C17.8044 14.8818 18.4465 14.1806 18.8165 13.3321C19.1866 12.4835 19.2635 11.5359 19.0351 10.6388C18.8068 9.7417 18.2862 8.94616 17.5555 8.37778C16.8248 7.80939 15.9257 7.50052 15 7.4999H13.95C13.6977 6.52427 13.2276 5.61852 12.5749 4.85073C11.9222 4.08295 11.104 3.47311 10.1817 3.06708C9.25943 2.66104 8.25709 2.46937 7.25006 2.50647C6.24304 2.54358 5.25752 2.80849 4.36761 3.28129C3.47771 3.7541 2.70656 4.42249 2.11215 5.23622C1.51774 6.04996 1.11554 6.98785 0.935783 7.9794C0.756025 8.97095 0.803388 9.99035 1.07431 10.961C1.34523 11.9316 1.83267 12.8281 2.49997 13.5832" stroke="currentColor" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_3098_154395">
                                <rect width="20" height="20" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
            
                            <span>Import</span>
                        </button>
            
                        <button class="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
            
                            <span>Add vendor</span>
                        </button>
                    </div>
                </div>
            
                <div class="mt-6 md:flex md:items-center md:justify-between">
                    <div class="inline-flex overflow-hidden bg-white border divide-x rounded-lg dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700">
                        <button class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 bg-gray-100 sm:text-sm dark:bg-gray-800 dark:text-gray-300">
                            View all
                        </button>
            
                        <button class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
                            Monitored
                        </button>
            
                        <button class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
                            Unmonitored
                        </button>
                    </div>
            
                    <div class="relative flex items-center mt-4 md:mt-0">
                        <span class="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </span>
            
                        <input type="text" value="Stripe" placeholder="Search" class="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
                    </div>
                </div>
            
                <div class="flex items-center mt-6 text-center border rounded-lg h-96 dark:border-gray-700">
                    <div class="flex flex-col w-full max-w-sm px-4 mx-auto">
                        <div class="p-3 mx-auto text-blue-500 bg-blue-100 rounded-full dark:bg-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </div>
                        <h1 class="mt-3 text-lg text-gray-800 dark:text-white">No vendors found</h1>
                        <p class="mt-2 text-gray-500 dark:text-gray-400">Your search “Stripe” did not match any vendors. Please try again or create add a new vendor.</p>
                        <div class="flex items-center mt-4 sm:mx-auto gap-x-3">
                            <button class="w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
                                Clear Search
                            </button>
            
                            <button class="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
            
                                <span>Add vendor</span>
                            </button>
                        </div>
                    </div>
                </div>
            
                <div class="mt-6 sm:flex sm:items-center sm:justify-between ">
                    <div class="text-sm text-gray-500 dark:text-gray-400">
                        Page <span class="font-medium text-gray-700 dark:text-gray-100">1 of 10</span> 
                    </div>
            
                    <div class="flex items-center mt-4 gap-x-4 sm:mt-0">
                        <a href="#" class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                            </svg>
            
                            <span>
                                previous
                            </span>
                        </a>
            
                        <a href="#" class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                            <span>
                                Next
                            </span>
            
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
    data() {
        return {
            isOpen: false,
            dropdownOpen: false
        }
    },

    mounted() {
        const charData = {
            type: 'doughnut',

            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
                datasets: [{
                    label: '# of Votes',
                    data: [20, 20, 20, 10, 10],

                    backgroundColor: [
                        'rgba(153, 102, 255)',
                        'rgba(255, 206, 86)',
                        'rgba(255, 99, 132)',
                        'rgba(54, 162, 235)',
                        'rgba(75, 192, 192)',
                    ],
                    borderColor: [
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(75, 192, 192, 1)',
                    ],
                }]
            },
            options: {
                plugins: {
                    legend: {
                        position: 'bottom',
                        fullSize: false,
                        align: 'start',
                        labels: {
                            padding: 10,
                            usePointStyle: true,
                            pointSytle: 'circle'
                        }
                    }
                },
            }
        };

        const data = [
            { x: 'Jan', applied: 19, left: 16 },
            { x: 'Feb', applied: 15, left: 8 },
            { x: 'Mar', applied: 24, left: 14 },
            { x: 'Apr', applied: 8, left: 7 },
            { x: 'May', applied: 11, left: 7 },
            { x: 'Jun', applied: 10, left: 6 },
            { x: 'Jul', applied: 17, left: 15 },
            { x: 'Aug', applied: 19, left: 18 },
            { x: 'Sep', applied: 18, left: 12 },
            { x: 'Oct', applied: 19, left: 20 },
            { x: 'Nov', applied: 18, left: 8 },
            { x: 'Dec', applied: 17, left: 12 },
        ];
        
        const secondcharData = {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Applied students',
                    borderRadius: 5,
                    data: data,
                    backgroundColor: '#FF7A00',
                    maxBarThickness: 5,
                    parsing: {
                        yAxisKey: 'applied'
                    },
                },
                {
                    label: 'Left students',
                    borderRadius: 5,
                    maxBarThickness: 5,
                    data: data,
                    backgroundColor: '#6F52ED',

                    parsing: {
                        yAxisKey: 'left'
                    },
                },

                ]
            },
            options: {
                responsive: true,


                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                    y: {
                        beginAtZero: true,
                        max: 25
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    },
                },

                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        };

        const ctx = document.getElementById('myChart');
        const second = document.getElementById('secondChart');
        const myChart = new Chart(ctx, charData);
        const secondChart = new Chart(second, secondcharData);

        myChart;
        secondChart;
    }
}
</script>