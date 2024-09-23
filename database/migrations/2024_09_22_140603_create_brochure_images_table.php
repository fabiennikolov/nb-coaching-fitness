<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('brochure_images', function (Blueprint $table) {
            $table->id();
            $table->string('image_path');
            $table->integer('order')->default(0); // Add an 'order' column to store image order
            $table->unsignedBigInteger('brochure_id');
            $table->foreign('brochure_id')->references('id')->on('brochures')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('brochure_images');
    }
};
