<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

// Customer Routes
Route::get('/menu', function () {
    return Inertia::render('menu');
})->name('menu');

Route::get('/cart', function () {
    return Inertia::render('cart');
})->name('cart');

Route::get('/profile', function () {
    return Inertia::render('profile');
})->name('profile');

Route::get('/product/{id}', function ($id) {
    return Inertia::render('product/detail', ['id' => $id]);
})->name('product.show');

// Admin Routes
Route::prefix('admin')->group(function () {
    Route::get('/', function () {
        return Inertia::render('admin/dashboard');
    })->name('admin.dashboard');

    Route::get('/orders', function () {
        return Inertia::render('admin/orders');
    })->name('admin.orders');

    Route::get('/menu', function () {
        return Inertia::render('admin/menu');
    })->name('admin.menu');

    Route::get('/analytics', function () {
        return Inertia::render('admin/analytics');
    })->name('admin.analytics');

    Route::get('/customers', function () {
        return Inertia::render('admin/customers');
    })->name('admin.customers');

    Route::get('/settings', function () {
        return Inertia::render('admin/settings');
    })->name('admin.settings');
});

require __DIR__.'/settings.php';
