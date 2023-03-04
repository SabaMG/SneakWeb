<template>
    <div class="bg-white dark:bg-gray-900">
        <div class="flex justify-center h-screen">
            <div class="hidden bg-cover lg:block lg:w-2/3" style="background-image: url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)">
                <div class="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                    <div>
                        <h2 class="text-2xl font-bold text-white sm:text-3xl">Meraki UI</h2>

                        <p class="max-w-xl mt-3 text-gray-300">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                            autem ipsa, nulla laboriosam dolores, repellendus perferendis libero suscipit nam temporibus
                            molestiae
                        </p>
                    </div>
                </div>
            </div>

            <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                <div class="flex-1">
                    <div class="text-center">
                        <div class="flex justify-center mx-auto">
                            <img class="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt="">
                        </div>

                        <p class="mt-3 text-gray-500 dark:text-gray-300">Sign in to access your account</p>
                    </div>

                    <div class="mt-8">
                        <form>
                            <div>
                                <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                                <input type="email" name="email" id="email" placeholder="example@example.com" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div class="mt-6">
                                <div class="flex justify-between mb-2">
                                    <label for="password" class="text-sm text-gray-600 dark:text-gray-200">Password</label>
                                    <a href="#" class="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot password?</a>
                                </div>

                                <input type="password" name="password" id="password" placeholder="Your Password" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div class="mt-6">
                                <a href="index.html" target="_blank">
                                <button class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                    Sign in
                                </button>
                                </a>
                            </div>

                        </form>

                        <p class="mt-6 text-sm text-center text-gray-400">Don&#x27;t have an account yet? <a href="signin.html" class="text-blue-500 focus:outline-none focus:underline hover:underline">Sign up</a>.</p>
                    </div>
                </div>
            </div>
        </div>
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