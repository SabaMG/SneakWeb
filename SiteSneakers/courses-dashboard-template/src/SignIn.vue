<template>
    <section class="bg-white dark:bg-gray-900">
        <div class="flex justify-center min-h-screen">
            <div class="hidden bg-cover lg:block lg:w-2/5" style="background-image: url('https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80')">
            </div>

            <div class="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                <div class="w-full">
                    <h1 class="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                        Get your free account now.
                    </h1>

                    <p class="mt-4 text-gray-500 dark:text-gray-400">
                        Let’s get you all set up so you can verify your personal account and begin setting up your profile.
                    </p>

                    <div class="mt-6">
                        <h1 class="text-gray-500 dark:text-gray-300">Select type of account</h1>

                        <div class="mt-3 md:flex md:items-center md:-mx-2">
                            <button class="flex justify-center w-full px-6 py-3 text-white bg-blue-500 rounded-lg md:w-auto md:mx-2 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>

                                <span class="mx-2">
                                    client
                                </span>
                            </button>

                            <button class="flex justify-center w-full px-6 py-3 mt-4 text-blue-500 border border-blue-500 rounded-lg md:mt-0 md:w-auto md:mx-2 dark:border-blue-400 dark:text-blue-400 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>

                                <span class="mx-2">
                                    worker
                                </span>
                            </button>
                        </div>
                    </div>

                    <form class="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                        <div>
                            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                            <input type="text" placeholder="John" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div>
                            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last name</label>
                            <input type="text" placeholder="Snow" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div>
                            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Phone number</label>
                            <input type="text" placeholder="XXX-XX-XXXX-XXX" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div>
                            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                            <input type="email" placeholder="johnsnow@example.com" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div>
                            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>
                            <input type="password" placeholder="Enter your password" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div>
                            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Confirm password</label>
                            <input type="password" placeholder="Enter your password" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <a href="index.html">
                        <button
                            class="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            <span>Sign Up</span>

                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd" />
                            </svg>
                        </button>
                        </a>
                    </form>
                </div>
            </div>
        </div>
    </section>
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