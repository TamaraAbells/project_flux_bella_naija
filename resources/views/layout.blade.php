<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="csrf-token" value="{{ csrf_token() }}"/>
        @stack('metas')

        <title>@if (trim($__env->yieldContent('meta-title')))@yield('meta-title')@else Laravel App @endif
        </title>
        <link href="{{ mix('css/tailwind.css') }}" rel="stylesheet">
        <link href="{{ mix('css/custom.css') }}" rel="stylesheet">

        @stack('css')
    </head>

    <body>
        @yield('content')

        @stack('js')
    </body>
</html>
