<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreFitnessTableRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => 'required|string|max:255|min:3',
            'url' => 'required|string|max:255|min:10',
            'description' => 'nullable|string'
        ];
    }


    /**
     * Get the custom messages for validation errors.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'name.required' => 'Полето за име е задължително.',
            'name.string' => 'Името трябва да бъде низ.',
            'name.max' => 'Името не може да бъде по-дълго от 255 знака.',
            'name.min' => 'Името трябва да съдържа поне 3 знака.',

            'url.required' => 'Полето за URL адрес е задължително.',
            'url.string' => 'URL адресът трябва да бъде низ.',
            'url.max' => 'URL адресът не може да бъде по-дълъг от 255 знака.',
            'url.min' => 'URL адресът трябва да съдържа поне 10 знака.',

            'description.string' => 'Описанието трябва да бъде низ.',
        ];
    }
}
