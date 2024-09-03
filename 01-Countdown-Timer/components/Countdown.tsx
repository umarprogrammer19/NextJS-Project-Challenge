"use client"; // Enables client-side rendering for this component

import { useState, useRef, useEffect, ChangeEvent } from 'react'; // Importing necessary hooks from React
import { Button } from '@/components/ui/button'; // Importing custom Button component
import { Input } from '@/components/ui/input'; // Importing custom Input component

function Countdown() {
    // State to store the duration input by the user (in seconds)
    const [duration, setDuration] = useState<number | string>("");

    // State to keep track of the time left in the countdown
    const [timeLeft, setTimeLeft] = useState<number>(0);

    // State to check if the countdown timer is running
    const [isActive, setIsActive] = useState<boolean>(false);

    // State to check if the countdown timer is paused
    const [isPaused, setIsPaused] = useState<boolean>(false);

    // Reference to store the interval ID so we can clear it later
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    // Function to set the countdown duration based on user input
    const handleSetDuration = (): void => {
        // Only proceed if duration is a valid number and greater than 0
        if (typeof duration === "number" && duration > 0) {
            setTimeLeft(duration); // Set the countdown time
            setIsActive(false); // Make sure the timer is not running
            setIsPaused(false); // Make sure the timer is not paused
            setDuration(""); // Clear the input field for better UX

            // Clear any existing timer to avoid multiple intervals running at once
            if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
            }
        }
    };

    // Function to start the countdown timer
    const handleStart = (): void => {
        // Start the countdown only if there's time left
        if (timeLeft > 0) {
            setIsActive(true); // Activate the timer
            setIsPaused(false); // Ensure the timer is not paused
        }
    };

    // Function to pause the countdown timer
    const handlePause = (): void => {
        // Only pause if the timer is currently active
        if (isActive) {
            setIsPaused(true); // Set the timer to paused
            setIsActive(false); // Deactivate the timer

            // Clear the interval to stop the countdown
            if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
            }
        }
    };

    // Function to reset the countdown timer
    const handleReset = (): void => {
        setIsActive(false); // Deactivate the timer
        setIsPaused(false); // Make sure the timer is not paused
        setTimeLeft(typeof duration === "number" ? duration : 0); // Reset the time to the original duration

        // Clear any running interval
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    };

    // Effect to handle the countdown logic when the timer is active
    useEffect(() => {
        // If the timer is active and not paused, start the countdown
        if (isActive && !isPaused) {
            timerRef.current = setInterval(() => {
                setTimeLeft((prevTime) => {
                    if (prevTime <= 1) {
                        clearInterval(timerRef.current!); // Stop the countdown at 0
                        timerRef.current = null;
                    }
                    return prevTime - 1; // Decrease time by 1 second
                });
            }, 1000); // Update every second
        }

        // Cleanup function to clear the interval when the component unmounts or the timer stops
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
            }
        };
    }, [isActive, isPaused]); // Dependencies array ensures the effect runs when these states change

    // Helper function to format the remaining time into a mm:ss format
    const formatTime = (time: number): string => {
        const minutes = Math.floor(time / 60); // Calculate minutes
        const seconds = time % 60; // Calculate remaining seconds
        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`; // Format with leading zeros
    };

    // Handler for changes in the duration input field
    const handleDurationChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value); // Convert input to number
        if (!isNaN(value)) {
            setDuration(value); // Set the duration if valid
        } else {
            setDuration(""); // Clear the input if invalid
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gradient-to-r from-indigo-600 to-purple-600">
            {/* Container for the countdown timer UI */}
            <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-lg p-8 w-full max-w-lg sm:max-w-md">
                {/* Timer Title */}
                <h1 className="text-4xl font-extrabold mb-6 text-gray-800 dark:text-gray-100 text-center">
                    Countdown Timer
                </h1>

                {/* Input field for duration and Set button */}
                <div className="flex flex-col sm:flex-row items-center mb-8">
                    <Input
                        type="number"
                        id="duration"
                        placeholder="Duration in seconds"
                        value={duration}
                        onChange={handleDurationChange}
                        className="flex-1 mb-4 sm:mb-0 sm:mr-4 rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                    />
                    <Button
                        onClick={handleSetDuration}
                        variant="outline"
                        className="bg-indigo-600 text-white dark:bg-indigo-500 dark:hover:bg-indigo-600 w-full sm:w-auto"
                        style={{ transition: 'transform 0.2s ease' }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        Set
                    </Button>
                </div>

                {/* Display the remaining time */}
                <div className="text-6xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-12 text-center">
                    {formatTime(timeLeft)}
                </div>

                {/* Buttons to control the countdown */}
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button
                        onClick={handleStart}
                        variant="outline"
                        className="bg-green-600 text-white dark:bg-green-500 dark:hover:bg-green-600 w-full sm:w-auto"
                        style={{ transition: 'transform 0.2s ease' }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        {isPaused ? "Resume" : "Start"}
                    </Button>
                    <Button
                        onClick={handlePause}
                        variant="outline"
                        className="bg-yellow-600 text-white dark:bg-yellow-500 dark:hover:bg-yellow-600 w-full sm:w-auto"
                        style={{ transition: 'transform 0.2s ease' }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        Pause
                    </Button>
                    <Button
                        onClick={handleReset}
                        variant="outline"
                        className="bg-red-600 text-white dark:bg-red-500 dark:hover:bg-red-600 w-full sm:w-auto"
                        style={{ transition: 'transform 0.2s ease' }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        Reset
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Countdown;
