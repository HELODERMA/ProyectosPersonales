@extends('layouts.app')

@section('content')
<b-container>
    <b-row align-h="center">

        <b-col cols="8">
            <b-card title="Inicio de Sesión">
                <b-alert show>Default Alert</b-alert>

                <b-form method="POST" action="{{ route('login') }}">
                    {{ csrf_field() }}

                    <b-form-group
                        label="Correo electrónico:"
                        label-for="email"
                        description="Tus datos estan seguron con nosotros.">

                        <b-form-input id="email"
                                type="email"
                                name="email"
                                required
                                value="{{ old('email') }}" autofocus
                                placeholder="example@mail.com">
                         </b-form-input>
                    </b-form-group>

                    <b-form-group
                        label="Contraseña:"
                        label-for="password">

                        <b-form-input id="password"
                                type="password"
                                name="password"
                                required
                                value="{{ old('password') }}">
                         </b-form-input>
                    </b-form-group>

                    <b-form-group>
                        <b-form-checkbox
                        name="remember"
                        {{ old('remember') ? 'checked="true"' : '' }}>
                        Recordar Sesión
                         </b-form-checkbox>
                    </b-form-group>


                        <b-button type="submit"
                        variant="primary">Ingresar
                        </b-button>

                        <b-button href="{{ route('password.request') }}"
                        variant="link">
                        ¿Olvidaste tu contraseña?
                        </b-button>

                </b-form>
            </b-card>
        </b-col>
    </b-row>
</b-container>
@endsection
