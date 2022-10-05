@extends('layout')

@section('meta-title') Project Flux Assignment @endsection

@push('css')
    {{-- <link href="{{ mix('css/app.css') }}" type="text/css" rel="stylesheet"/> --}}
@endpush

@section('content')
    <div id="app">
    </div>
@endsection

@push('js')
    <script src="{{ mix('js/app.js') }}" type="text/javascript"></script>
@endpush
