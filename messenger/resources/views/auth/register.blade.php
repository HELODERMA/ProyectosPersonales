@extends('layouts.app')

@section('content')
    <b-container>
        <b-row align-h="center">
            <b-col cols="8">

                 <b-card title="Registro" class="my-3">

                    @if ($errors-> any())
                    <b-alert show variant="danger">
                    <ul class="mb-0" >
                    @foreach ($errors->all() as $error)
                        <li> {{ $error }} </li>
                        @endforeach
                    </ul>
                    </b-alert>
                    @else
                    <b-alert show>Por favor ingresa tus datos</b-alert>
                    @endif

                    <b-form method="POST" action="{{ route('register') }}">
                        {{ csrf_field() }}

                        <!-- Campo del Nombre -->
                        <b-form-group
                            label="Nombre:"
                            label-for="name">

                            <b-form-input id="name"
                                    type="text"
                                    name="name"
                                    required
                                    value="{{ old('name') }}" autofocus>
                            </b-form-input>
                        </b-form-group>

                        <!-- Campo del correo -->
                        <b-form-group
                            label="Correo electrónico:"
                            label-for="email"
                            description="Tus datos estan seguron con nosotros.">

                            <b-form-input id="email"
                                    type="email"
                                    name="email"
                                    required
                                    value="{{ old('email') }}"
                                    placeholder="example@mail.com">
                            </b-form-input>
                        </b-form-group>

                        <!-- Contrasena -->
                        <b-form-group
                            label="Contraseña:"
                            label-for="password">

                            <b-form-input id="password"
                                    type="password"
                                    name="password"
                                    required>
                            </b-form-input>
                        </b-form-group>

                        <!-- Confirmacion de la contraseña -->
                         <b-form-group
                            label="Confirmar contraseña:"
                            label-for="password">

                            <b-form-input id="password-confirm"
                                    type="password"
                                    name="password_confirmation"
                                    required>
                            </b-form-input>
                        </b-form-group>

                        <!-- Botones -->
                        <b-button type="submit"
                            variant="primary">Confirmar Registro
                        </b-button>

                        <b-button href="{{ route('login') }}"
                            variant="link">
                            ¿Ya me he registrado?
                        </b-button>

                    </b-form>
                </b-card>

            </b-col>
        </b-row>
    </b-container>

@endsection
