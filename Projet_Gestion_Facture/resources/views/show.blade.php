@extends('app')

@section('content')

<div class="container">
    <div class="row flex-lg-nowrap">
      
    
      <div class="col">
        <div class="e-tabs mb-3 px-3"></div>
    
        <div class="row flex-lg-nowrap">
          <div class="col mb-3">
            <div class="e-panel card">
              <div class="card-body">
                <div class="card-title">
                  <h6 class="mr-2"> Gestion Facture</h6>
                </div>
                <div class="text-center px-xl-3">
                    <a href="#" class="btn btn-success btn-block" data-toggle="modal" data-target="#creer_produit">
                        {{ __('Nouvelle Facture')}}
                    </a>
                  </div>
                <div class="e-table">
                  <div class="table-responsive table-lg mt-3">
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          
                          <th class="max-width">Numero Client</th>
                          <th class="max-width">Date facture</th>
                          <th class="max-width">TVA</th>
                          <th class="max-width">Montant HTT</th>
                          <th class="max-width">montant TTC</th>
                          <th class="max-width">Reference Produit</th>
                          <th class="max-width">Nom du produit</th>
                          <th class="max-width">Validite Offre</th>
                          <th class="max-width">Montant en lettre</th>
                          <th class="max-width">Quantite Produit</th>
                          <th class="max-width">Prix Unitaire HT</th>
                          
                        </tr>
                      </thead>
                      @foreach ($factures as $facture)
                      <tbody>
                        <tr>
                          <td class="text-nowrap align-middle"> {{ $facture->nom_client }} </td>
                          <td class="text-nowrap align-middle"> {{ $facture->date_facture }} </td>
                          <td class="text-nowrap align-middle"> {{ $facture->tva }} </td>
                          <td class="text-nowrap align-middle"> {{ $facture->montant_htt }} </td>
                          <td class="text-nowrap align-middle"> {{ $facture->montant_ttc }} </td>
                          <td class="text-nowrap align-middle"> {{ $facture->ref_prod }} </td>
                          <td class="text-nowrap align-middle"> {{ $facture->nom_prod }} </td>
                          <td class="text-nowrap align-middle"> {{ $facture->validite_offre }} </td>
                          <td class="text-nowrap align-middle"> {{ $facture->montant_lettre }} </td>
                          <td class="text-nowrap align-middle"> {{ $facture->qte_prod }} </td>
                          <td class="text-nowrap align-middle"> {{ $facture->prix_unitaire_ht }} </td>
                      </tr>
                      </tbody>
                      @endforeach
                      
                    </table>
                  </div>
                  <div class="d-flex justify-content-center">
                    <ul class="pagination mt-3 mb-0">
                      <li class="disabled page-item"><a href="#" class="page-link">‹</a></li>
                      <li class="active page-item"><a href="#" class="page-link">1</a></li>
                      <li class="page-item"><a href="#" class="page-link">2</a></li>
                      <li class="page-item"><a href="#" class="page-link">3</a></li>
                      <li class="page-item"><a href="#" class="page-link">4</a></li>
                      <li class="page-item"><a href="#" class="page-link">5</a></li>
                      <li class="page-item"><a href="#" class="page-link">›</a></li>
                      <li class="page-item"><a href="#" class="page-link">»</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
    
        <!-- User Form Modal -->
        <form action=" {{url('save')}}" method="post" enctype="multipart/form-data">
            @csrf
            <div class="modal fade text-left" id="creer_produit" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">{{ __('Creer une nouvelle facture') }}</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>                    
                        </div>
                        <div class="modal-body">
                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <div class="form-group">
                                    <strong>{{ __('Nom du client') }}:</strong>
                                    <input type="text" name="nom_client" required class="form-control">
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <div class="form-group">
                                    <strong>{{ __('Date facture') }}:</strong>
                                    <input type="text" name="date_facture" required  class="form-control">
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <div class="form-group">
                                    <strong>{{ __('TVA') }}:</strong>
                                    <input type="text" name="tva" required  class="form-control">
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <div class="form-group">
                                    <strong>{{ __('Montant HTT') }}:</strong>
                                    <input type="text" name="montant_htt" required  class="form-control">
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <div class="form-group">
                                    <strong>{{ __('Montant TTC') }}:</strong>
                                    <input type="text" name="montant_ttc" required class="form-control">
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <div class="form-group">
                                    <strong>{{ __('Quantite du produit') }}:</strong>
                                    <input type="text" name="qte_stock" required  class="form-control">
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <div class="form-group">
                                    <strong>{{ __('Validite Offre') }}:</strong>
                                    <input type="text" name="validite_offre" required  class="form-control">
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <div class="form-group">
                                    <strong>{{ __('Montant en lettre') }}:</strong>
                                    <input type="text" name="montant_lettre" required class="form-control">
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <div class="form-group">
                                    <strong>{{ __('Quantite du produit') }}:</strong>
                                    <input type="text" name="qte_prod" required  class="form-control">
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <div class="form-group">
                                    <strong>{{ __('Reference produit') }}:</strong>
                                    <input type="text" name="ref_prod" required placeholder="Reference produit" class="form-control">
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <div class="form-group">
                                    <strong>{{ __('prix unitaire HT') }}:</strong>
                                    <input type="text" name="prix_unitaire_ht" required placeholder="prix unitaire HT" class="form-control">
                                </div>
                            </div>
                            
                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <button type="submit" class="btn btn-success">{{ __('Enregistrer') }}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
      </div>
    </div>
    </div>

@endsection