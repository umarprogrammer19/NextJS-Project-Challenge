"use client";
import Image from 'next/image';
import React, { use, useState } from 'react';
import { saveAs } from 'file-saver';

interface Meme {
    name: string;
    id: string;
    url: string;
    box_count: number;
}

const CreateMeme = ({ searchParams }: { searchParams: Meme }) => {
    const [generatedMemeImage, setGeneratedMemeImage] = useState<string | null>(null);
    const [inputTexts, setInputTexts] = useState<{ [key: string]: string }>({});
    const [loading, setLoading] = useState<boolean>(false);
    const userName: string = "umarprogrammer19";
    const password: string = "Ugsofficial190807"

    const handleInputChange = (index: number, value: string) => {
        setInputTexts(prev => ({ ...prev, [`text_${index}`]: value }));
    };

    const generateMeme = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);

        const filledInputs = Object.values(inputTexts).filter(text => text.trim() !== '');
        const boxesParams = filledInputs.map((text, index) => `boxes[${index}][text]=${encodeURIComponent(text)}`).join('&');
        const apiUrl = `https://api.imgflip.com/caption_image?template_id=${searchParams.id}&username=${userName}&password=${password}&${boxesParams}`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            if (data.success) {
                setGeneratedMemeImage(data.data.url);
                setInputTexts({});
            } else {
                alert('Error generating meme: ' + data.error_message);
            }
        } catch (error) {
            alert('Error generating meme: ' + (error as Error).message);
        } finally {
            setLoading(false);
        }
    };

    const gettingNumberOfInput = (): JSX.Element[] => {
        const inputs: JSX.Element[] = [];
        for (let i = 0; i < searchParams.box_count; i++) {
            inputs.push(
                <input
                    type="text"
                    key={i}
                    placeholder={`Text ${i + 1}`}
                    value={inputTexts[`text_${i}`] || ''}
                    onChange={(e) => handleInputChange(i, e.target.value)}
                    className="w-full p-3 my-2 rounded-md border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-300"
                />
            );
        }
        return inputs;
    };

    const handleDownload = () => {
        if (generatedMemeImage) {
            saveAs(generatedMemeImage, 'meme.png');
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900">
            <h1 className="text-6xl font-bold text-center mt-12 mb-8 text-cyan-400 shadow-lg">
                Create Your Meme
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 w-full max-w-5xl">
                {/* Meme Template Card */}
                <div className="flex flex-col items-center bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                    <Image src={searchParams.url} alt='Meme Template' width={500} height={300} className="rounded-t-lg" />
                    <form onSubmit={generateMeme} className="w-full p-4">
                        {gettingNumberOfInput()}
                        <button
                            type='submit'
                            className={`w-full py-3 px-4 mt-4 ${loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'} text-white font-semibold rounded-md shadow-md transition duration-200`}
                            disabled={loading}
                        >
                            {loading ? 'Generating...' : 'Generate Meme'}
                        </button>
                    </form>
                </div>

                {/* Generated Meme Card */}
                {generatedMemeImage && (
                    <div className="flex flex-col items-center bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                        <Image src={generatedMemeImage} alt='Generated Meme' width={500} height={300} className="rounded-lg" />
                        <button
                            onClick={handleDownload}
                            className="w-full py-3 px-4 mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md transition duration-200"
                        >
                            Download Meme
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CreateMeme;
